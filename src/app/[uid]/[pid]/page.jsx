"use client";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { auth } from "@/lib/firebase";
import Image from "next/image";

function Page() {
  const params = useParams();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [memo, setMemo] = useState("");
  async function getProfile() {
    const docRef = doc(db, "users", params.uid, "notes", params.pid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setTitle(docSnap.get("title"));
      setDesc(docSnap.get("description"));
      setThumbnail(docSnap.get("thumbnail"));
      setMemo(docSnap.get("memo"));
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      setUserName("404 not Found");
    }
  }
  async function save() {
    await updateDoc(doc(db, "users", params.uid, "notes", params.pid)),
      {
        memo: memo,
      };
  }
  useEffect(() => {
    getProfile();
  });

  return (
    <div>
      <div className="lg:w-4/12 md:w-2/3 sm:w-10/12 w-full mx-auto ">
        <div className="mx-5 mt-10">
          <div className="block">
            <p className=" text-xs/3 my-2 text-zinc-600">ノート</p>
          </div>
          <h1
            className="w-full font-extrabold text-5xl my-8 font-sans leading-tight"
            style={{
              lineHeight: 1.14599,
              letterSpacing: 0,
            }}
          >
            {title}
          </h1>
          <p className="mb-3 font-sans font-medium text-xl">{desc}</p>
        </div>
      </div>
      <div className=" md:h-[600px] overflow-hidden sm:rounded-lg">
        <Image
          src={thumbnail}
          width={640}
          height={359}
          alt="Apple park"
          className="mt-7 mx-auto sm:rounded-lg lg:w-6/12"
        />
      </div>
      <div className="lg:w-1/3 md:w-2/3 sm:w-10/12 w-full mx-auto my-3 mb-14">
        <p className="text-xs text-zinc-500 mb-3 mx-5">
          Apple Park, Cupertino, United States
        </p>
      </div>
      <div className="lg:w-1/3 md:w-2/3 sm:w-10/12 w-full mx-auto mb-6">
        <div className="mx-5">
          <button
            className="z-10 bg-[#0071e3] py-2  text-white rounded-full font-normal text-center px-4 text-base"
            onClick={save()}
          >
            保存する
          </button>
        </div>
      </div>
      <div className="lg:w-1/3 md:w-2/3 sm:w-10/12 w-full mx-auto mb-6">
        <div className="mx-5">
          <textarea
            className="mb-3 font-sans font-normal text-base leading-normal w-full max-w-full outline-0 border-0"
            onChange={(e) => setMemo(e.target.value)}
            value={memo}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default Page;
