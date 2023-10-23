"use client";

import LabelInput from "@/components/LabelInput";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Comments() {
  const [comments, setComment] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
      setComment(savedComments);
    }
  }, []); // Executa isso apenas na montagem do componente

  function handleSubmit(e) {
    e.preventDefault();

    const newComment = {
      id: Math.floor(Math.random() * 1000),
      title: title,
      content: content,
      createdAt: new Date().toLocaleString(),
    };

    if (typeof window !== "undefined") {
      const existingComments = JSON.parse(localStorage.getItem("comments")) || [];
      const updatedComments = [newComment, ...existingComments];
      localStorage.setItem("comments", JSON.stringify(updatedComments));
      setComment(updatedComments);
    }

    setTitle("");
    setContent("");
  }

  
  return (
    <>
      <div className="bg-stone-800  text-gray-200">
        <div className="flex h-screen ">
          <form
            onSubmit={handleSubmit}
            className="bg-stone-900 w-full rounded shadow-md px-1"
          >
            <div>
              <LabelInput
                htmlFor="publicationTitle"
                label="Publication title"
                placeholder="Write here"
                type="text"
                value={title}
                onChange={(ev) => setTitle(ev.target.value)}
              />
            </div>
            <div>
              <label className="flex" htmlFor="content">
                Content
              </label>
              <textarea
                className="bg-stone-950 w-full"
                name="content"
                id="content"
                cols="30"
                rows="10"
                placeholder="Write your content here"
                value={content}
                onChange={(ev) => setContent(ev.target.value)}
              ></textarea>
            </div>
            <div className="text-end">
              <button
                type="submit"
                className="bg-cyan-900 hover:bg-cyan-950 rounded mt-3 h-9 px-2 m-3 mb-3"
              >
                Post
              </button>
            </div>
            <section className="flex text-center gap-2" id="comments">
              {comments.map((comment) => (
                <div key={comment.id}>
                  <h1 className="border">{comment.title}</h1>
                  <span className="border">Em {comment.createdAt.toLocaleString()}</span>
                  <Link href={`/publication/${comment.id}`}>Ver</Link>
                </div>
              ))}
            </section>
          </form>
        </div>
      </div>
    </>
  );
}
