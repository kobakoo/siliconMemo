"use client";
import React from "react";
import { signInWithPopup, signInWithRedirect } from "firebase/auth";
import {
  auth,
  provider,
  ms_provider,
  // ms_provider,
} from "@/lib/firebase";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

function Page() {
  const router = useRouter();

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider);
    router.push(`/${auth.currentUser.uid}`);
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("oh, nice...");
    } else {
      // docSnap.data() will be undefined in this case
      setDoc(doc(db, "users", auth.currentUser.uid), {
        name: auth.currentUser.displayName,
        iconUrl: auth.currentUser.photoURL,
        desc: "",
      });
      // setDoc(doc(db, "users", auth.currentUser.uid, "notes" {
      //   title: "",
      //   thumbnail: "",
      //   description: "",
      //   memo: "メモはその一歩から始まる...",
      // });
      addDoc(collection(db, "users", auth.currentUser.uid, "notes"), {
        title: "サンフランシスコ空港",
        thumbnail:
          "https://images.unsplash.com/photo-1533847103089-443f29bb8cba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1035&q=100",
        description:
          "サンフランシスコ国際空港（サンフランシスコこくさいくうこう、英語: San Francisco International Airport） (IATA: SFO, ICAO: KSFO, FAA LID: SFO) は、アメリカ合衆国のカリフォルニア州サンフランシスコから約20km南に位置する国際空港である。",
        memo: "メモはその一歩から始まる...",
      });
      addDoc(collection(db, "users", auth.currentUser.uid, "notes"), {
        title: "カストロ地区",
        thumbnail:
          "https://images.unsplash.com/photo-1621606016505-f74ee91fc522?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80",
        description:
          "カストロ通り (カストロ地区、英語: Castro District, The Castro） は、カリフォルニア州サンフランシスコのユリーカ・バレー近郊にある地域の名称。1960年代から70年代にかけては労働者階級の住民が多く住む地域であったが、その後アメリカ屈指のゲイタウンへと変化し、今日ではその最大規模の一つとされる。これまでにLGBTに関連した政治運動やイベントなどの舞台ともなり、LGBTコミュニティのシンボル的存在の一つとなっている。",
        memo: "メモはその一歩から始まる...",
      });
      addDoc(collection(db, "users", auth.currentUser.uid, "notes"), {
        title: "ゴールデンゲートブリッジ・フィッシャーマンズワーフ",
        thumbnail:
          "https://images.unsplash.com/photo-1560346181-fba10658510e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
        description: "有名な観光スポット",
        memo: "メモはその一歩から始まる...",
      });
      addDoc(collection(db, "users", auth.currentUser.uid, "notes"), {
        title: "起業家との交流",
        thumbnail:
          "https://images.unsplash.com/photo-1664575599736-c5197c684128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        description: "",
        memo: "メモはその一歩から始まる...",
      });
      addDoc(collection(db, "users", auth.currentUser.uid, "notes"), {
        title: "アイデアソン",
        thumbnail:
          "https://images.unsplash.com/photo-1598520106830-8c45c2035460?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
        description:
          "アイデアソンは アイデアとマラソンを組み合わせた造語である。 新しいアイデアを生み出すために行われるイベントである。 主にIT分野で使われている。 1990年頃アメリカで使われ始めたと言われている[1]。 ハッカソンと違い、物を作るではなく、アイデアを生むことに重きを置いたイベントである。ハッカソンの練習としてアイデアソンを用いることもある[2]。",
        memo: "メモはその一歩から始まる...",
      });
      // addDoc(collection(db, "users", auth.currentUser.uid, "notes"), {
      //   title: "アイデアソン②",
      //   thumbnail:
      //     "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      //   description:
      //     "アイデアソンは アイデアとマラソンを組み合わせた造語である。 新しいアイデアを生み出すために行われるイベントである。 主にIT分野で使われている。 1990年頃アメリカで使われ始めたと言われている[1]。 ハッカソンと違い、物を作るではなく、アイデアを生むことに重きを置いたイベントである。ハッカソンの練習としてアイデアソンを用いることもある[2]。",
      //   memo: "メモはその一歩から始まる...",
      // });
      addDoc(collection(db, "users", auth.currentUser.uid, "notes"), {
        title: "NPOのメモリアルチャーチ見学",
        thumbnail:
          "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        description: "",
        memo: "メモはその一歩から始まる...",
      });
      addDoc(collection(db, "users", auth.currentUser.uid, "notes"), {
        title: "MLBの球場見学",
        thumbnail:
          "https://images.unsplash.com/photo-1586439231988-b758da9f2296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        description:
          "NPOとは、「Nonprofit Organization」又は「Not-for-Profit Organization」の略で、広義では非営利団体のこと[1][2][3]。狭義では、非営利での社会貢献活動や慈善活動を行う市民団体のこと。",
        memo: "メモはその一歩から始まる...",
      });
      addDoc(collection(db, "users", auth.currentUser.uid, "notes"), {
        title: "BtraxでCEOと交流",
        thumbnail: "https://btrax.com/assets/images/about/main_photo.jpg",
        description:
          "UXデザインを軸に最適なユーザー体験を生み出し新たな価値の創出に貢献するデザイン会社",
        memo: "メモはその一歩から始まる...",
      });
      addDoc(collection(db, "users", auth.currentUser.uid, "notes"), {
        title: "Sandbox VRでVRを体験",
        thumbnail:
          "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1756&q=80",
        description:
          "バーチャル・リアリティ（英: virtual reality）とは、コンピューターによって創り出された仮想的な空間などを現実であるかのように疑似体験できる仕組み[1]。コンピューターによって提供される感覚刺激 (視覚像や音など) を通じて体験される人工的な環境であり、環境内で起こることを人の行動により部分的に決定することができるもの[2]。略語はVR[3]。",
        memo: "メモはその一歩から始まる...",
      });
      addDoc(collection(db, "users", auth.currentUser.uid, "notes"), {
        title: "サンフランシスコの街",
        thumbnail:
          "https://images.unsplash.com/photo-1610494475096-ad11c3a21638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        description:
          "サンフランシスコ市郡（サンフランシスコしぐん、英語: City and County of San Francisco、漢字表記「桑港」）、通称サンフランシスコ（San Francisco）[1] は、アメリカ合衆国西海岸にあるカリフォルニア州の北部に位置する都市であり、北米有数の世界都市。",
        memo: "メモはその一歩から始まる...",
      });
      addDoc(collection(db, "users", auth.currentUser.uid, "notes"), {
        title: "Google訪問",
        thumbnail:
          "https://images.unsplash.com/photo-1612873346068-1d4b76372235?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
        description:
          "Google LLC（グーグル）は、インターネット関連のサービスと製品に特化したアメリカ合衆国の企業 (LLC) である。Alphabetの子会社。 世界最大の検索エンジン、オンライン広告、クラウドコンピューティング、ソフトウェア、ハードウェア関連の事業がある。アメリカ合衆国の主要なIT企業で、 ビッグ・テックの一つ[1][2]。",
        memo: "メモはその一歩から始まる...",
      });
      addDoc(collection(db, "users", auth.currentUser.uid, "notes"), {
        title: "スタンフォード大学でフィールドワーク",
        thumbnail:
          "https://images.unsplash.com/photo-1508302882073-8af6be4c6688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80",
        description:
          "リーランド・スタンフォード・ジュニア大学（リーランド・スタンフォード・ジュニアだいがく、英語: Leland Stanford Junior University）は、カリフォルニア州スタンフォードに本部を置くアメリカ合衆国の私立大学である。大学の略称は、スタンフォード大学（スタンフォードだいがく、英: Stanford University）、スタンフォード（スタンフォード、英: Stanford）。",
        memo: "メモはその一歩から始まる...",
      });

      addDoc(collection(db, "users", auth.currentUser.uid, "notes"), {
        title: "元パロアルト市長のYoriko Kishimo氏",
        thumbnail:
          "https://images.unsplash.com/photo-1572847429056-6f47d8990f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3433&q=80",
        description:
          "パロアルト (Palo Alto、IPA /ˌpæloʊˈæltoʊ/) は、アメリカ合衆国カリフォルニア州サンフランシスコ・ベイエリア地域内のサンタクララ郡にある都市である。パロアルト市はシリコンバレーの北部端にあり、スタンフォード大学、ヒューレット・パッカード及びテスラモーターズのような、複数のハイテク企業の本拠地である。2010年現在、パロアルト市は総人口6万4403人である。",
        memo: "メモはその一歩から始まる...",
      });

      addDoc(collection(db, "users", auth.currentUser.uid, "notes"), {
        title: "Apple Park Visitor Center",
        thumbnail:
          "https://images.unsplash.com/photo-1581711496815-8a876c1c63f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
        description:
          "Apple Inc.（アップル）は、アメリカ合衆国の多国籍テクノロジー企業である。カリフォルニア州クパチーノに本社を置く。デジタル家庭電化製品、ソフトウェア、オンラインサービスの開発・販売を行っている。",
        memo: "メモはその一歩から始まる...",
      });
      addDoc(collection(db, "users", auth.currentUser.uid, "notes"), {
        title: "Play Ground Global",
        thumbnail:
          "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2338&q=80",
        description:
          "私たちはビジョンと テクノロジーへの深い理解を活用して 、何世代にもわたって影響を与える 企業の構築を支援します。",
        memo: "メモはその一歩から始まる...",
      });
    }
  };
  const signInWithMicrosoft = () => {
    signInWithPopup(auth, ms_provider);
  };
  return (
    <div className="m-5 mx-auto w-[980px] max-w-full mt-10">
      <h1 className=" font-bold text-4xl">サインインをして始めましょう</h1>
      <div className="w-full m-14">
        <div className="mx-auto w-full">
          <h2 className="mx-auto text-center text-2xl m-12 font-semibold text-zinc-600">
            Sign in to Silicon Memo
          </h2>
          <div className="mx-auto w-full my-5 flex items-center justify-center">
            <button
              type="button"
              className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
              onClick={signInWithGoogle}
            >
              <svg
                className="w-4 h-4 mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 19"
              >
                <path
                  fillRule="evenodd"
                  d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                  clipRule="evenodd"
                />
              </svg>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
