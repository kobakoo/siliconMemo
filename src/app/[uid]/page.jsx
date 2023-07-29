/* eslint-disable @next/next/no-img-element */
"use client";
import { auth } from "@/lib/firebase";
import { useParams, useSearchParams, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Image from "next/image";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";

function Page() {
  const params = useParams();
  const search = useSearchParams();
  const pathname = usePathname();
  const uid = params.uid;
  const [edit, setEdit] = useState(false);
  const [userName, setUserName] = useState("");
  const [userIcon, setUserIcon] = useState("");
  const [notes, setNotes] = useState([]);

  async function getProfile() {
    const docRef = doc(db, "users", params.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setUserIcon(docSnap.get("iconUrl"));
      setUserName(docSnap.get("name"));
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      setUserName("404 not Found");
    }
  }

  setTimeout(async () => {
    if (auth.currentUser != null) {
      if (uid === auth.currentUser.uid) {
        setEdit(true);
        console.log(edit);
      }
    }
    getProfile();
    const querySnapshot = await getDocs(
      collection(db, "users", params.uid, "notes")
    );
    let notesArray = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      // const dataValue = doc.data();
      notesArray.push({
        key: doc.id,
        title: doc.get("title"),
        desc: doc.get("description"),
        thumbnail: doc.get("thumbnail"),
      });
    });
    setNotes(notesArray);
  }, 1000);

  return (
    <div className="overflow-x-auto">
      <div className="lg:w-1/2 md:w-2/3 sm:w-10/12 w-full mx-auto my-10 mb-20">
        <div className="sm:flex sm:flex-nowrap lg:gap-10 md:gap-7 sm:gap-5 items-start">
          <Image
            src={userIcon}
            alt={userName}
            className=" bg-[url('https://data.uxmilk.jp/wp-content/uploads/2019/01/18NJgObmgEVhNWVt3poeTaA.gif')] bg-center rounded-full sm:mx-0 mx-auto shadow-sm hover:shadow-lg transition-all"
            width={150}
            height={150}
          />
          <h1 className="mt-10 lg:text-5xl md:text-3xl font-sans font-bold sm:text-3xl sm:w-auto sm:text-left w-full text-center text-2xl truncate pb-1">
            {userName}
          </h1>
        </div>
      </div>
      <div className="bg-[#f2f2f2] overflow-x-auto">
        <div className="lg:ml-[25%] md:ml-[16.6%] sm:ml-[8.3%] mx-auto my-10 overflow-x-auto ml-10">
          <div className="flex flex-nowrap gap-x-3 py-16 lg:w-[5500px] md:w-[4500px] sm:w-[4000px] w-[3750px]">
            {notes.map((doc) => (
              <Link
                className="shadow-sm bg-white lg:w-96 md:w-80 sm:w-72 w-64 lg:h-auto md:h-96 sm:h-80 h-72 max-w-screen overflow-hidden text-ellipsis"
                key={doc.key}
                href={`/${params.uid}/${doc.key}`}
              >
                <div className="w-full lg:h-[180px] md:h-[170px] sm:h-[150px] h-[130px] overflow-hidden">
                  <Image
                    src={doc.thumbnail}
                    width={1126}
                    height={748}
                    alt="thumbnail"
                    className="rounded-t-md h-[748px] width-[1126px]"
                  ></Image>
                </div>
                <div className="my-5 max-w-full rounded-b-sm overflow-hidden">
                  <h3 className="font-bold text-2xl mb-6 mx-4">{doc.title}</h3>
                  <p className=" mx-4 text-ellipsis overflow-hidden m-3 md:text-sm text-xs text-zinc-600">
                    {doc.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
