"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import ImageWithDesc from "@/components/ImageWithDesc";
import HomeHeader from "@/components/HomeHeader";
import { motion } from "framer-motion";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="lg:w-4/12 md:w-2/3 sm:w-10/12 w-full mx-auto ">
        <div className="mx-5 mt-10">
          <div className="block">
            <p className=" text-xs/3 my-2 text-zinc-600">プロジェクト</p>
            <p className="text-sm/3 my-1 mt-2 text-zinc-500">2023年 7月 27日</p>
          </div>
          <h1
            className="w-full font-extrabold text-5xl my-8 font-sans leading-tight"
            style={{
              fontFamily: "SF Pro JP",
              lineHeight: 1.14599,
              letterSpacing: 0,
            }}
          >
            シリコンバレー研修用メモはあなたに画期的なメモを提供します
          </h1>
          <p className="mb-3 font-sans font-medium text-xl">
            「シリコンバレー研修のメモ」を使えばあなたの記録をそのまま保存でき、見返すのも簡単です。忘れることもメモをなくすこともなくWebから探索可能です
          </p>
        </div>
      </div>
      <Image
        src="https://images.unsplash.com/photo-1524046997286-863495b9638e?ixlib=rb-4.0.3&auto=format&fit=crop&w=3432&q=100"
        width={640}
        height={359}
        alt="Apple park"
        className="mt-7 mx-auto sm:rounded-lg lg:w-6/12"
      />
      <div className="lg:w-1/3 md:w-2/3 sm:w-10/12 w-full mx-auto my-3 mb-14">
        <p className="text-xs text-zinc-500 mb-3 mx-5">
          Apple Park, Cupertino, United States
        </p>
      </div>
      <div className="lg:w-1/3 md:w-2/3 sm:w-10/12 w-full mx-auto mb-6">
        <div className="mx-5">
          <p className="mb-3 font-sans font-normal text-base leading-normal">
            {/* <span
              className="text-xs/3 my-1.5 text-zinc-600 items-center justify-items-center font-bold"
              style={{ textTransform: "uppercase" }}
            >
              プロジェクト
            </span> */}
            シリコンバレーへの海外研修で革新的なテクノロジーや世界的に有名な企業が集まるこの地域で学んだ経験は、参加者にとって貴重なものとなることでしょう。そこで、我々はシリコンバレーでの研修をより効果的かつ効率的に活用するための新しいメモアプリを提供いたします。このアプリは、参加者が研修中に重要な情報を記録し、アイデアを整理し、学んだことを簡単に共有することを可能にします。シンプルかつ直感的なインターフェースと高度な機能を組み合わせた本アプリは、シリコンバレーでの研修をより有意義なものにすることでしょう。
          </p>
        </div>
      </div>
      <div className="lg:w-1/3 md:w-2/3 sm:w-10/12 w-full mx-auto mb-6">
        <div className="mx-5">
          <p className="mb-3 font-sans font-normal text-base leading-normal">
            アプリの特長としては、以下に挙げられる点があります。
            まず一つ目はクラウド同期です。
            アカウントを作成することで、メモはクラウドに自動的にバックアップされ、複数のデバイス間で同期されます。これにより、大切なデータを失う心配なく、どこでもアクセスできる利便性があります。
            二つ目はカテゴリとタグ付けです。
            メモを整理するためにカテゴリやタグを使用できます。研修中の異なるテーマやトピックごとにメモを分類し、後で簡単に見つけることができます。効果的な学習と情報管理をサポートします。
            三つ目は写真の設定です。
            研修での体験をより豊かに伝えるために、写真を設定できます。会社の外観やアクティビティの様子、または印象的な景色などを記録し、学びの記憶をリッチにします。
            四つ目は簡単な共有機能です。
            メモをチームメンバーや仲間と簡単に共有できます。研修で学んだことを共有し合い、知識の共有を促進します。他の人のメモを見ることで、新しい視点を得たり、アイデアを交換したりすることも可能です。
            そして最後に五つ目は予定の確認ができるということです。
            研修中の忙しいスケジュールに追われても大丈夫。サイトを開けば、重要なタスクや予定を逃さずに確認でき、効率的なスケジュール管理をサポートします。
            シリコンバレーでの海外研修を最大限に活用するために、このメモアプリをお使いください。シンプルで使いやすいインターフェースが、あなたの学びと成長をサポートします。豊富な機能と柔軟性を持つこのアプリは、あなたのシリコンバレー体験をより充実させることでしょう。今すぐ登録して、準備を始めましょう！
          </p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Image
          src="https://images.unsplash.com/photo-1592096304832-62463bfdc822?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=100"
          width={640}
          height={359}
          alt="Google company"
          className="mt-7 mx-auto sm:rounded-lg lg:w-6/12"
        />
      </motion.div>
      <div className="lg:w-1/3 md:w-2/3 sm:w-10/12 w-full mx-auto my-3 mb-14">
        <p className="text-xs text-zinc-500 mb-3 mx-5">
          Google plex,Sunnyvale, CA, USA
        </p>
      </div>
      <div className="lg:w-1/3 md:w-2/3 sm:w-10/12 w-full mx-auto mb-6">
        <div className="mx-5">
          <p className="mb-3 font-sans font-normal text-base leading-normal">
            私たちはは7/28から、シリコンバレーに研修に行き、起業家の方のプレゼンを聞いたり、大学に行ったりとイベントが盛りだくさんとなっていますね。
            そこで、今回体験・研修させていただく方々のことについて少し調べてみました!時系列順に並べて紹介していくのでぜひ見ていってください!
          </p>
        </div>
      </div>
      <div className="lg:w-1/3 md:w-2/3 sm:w-10/12 w-full mx-auto mb-6">
        <div className="mx-5">
          <p className="mb-3 font-sans font-normal text-base leading-normal">
            まず1日目は、サンフランシスコ空港に到着し。カストロ地区・ゴールデンゲートブリッジ・フィッシャーマンズワーフなどを見学したのち、ヒルトンユニオンスクエア(ホテル)に到着します。そして、起業家である吉川欣也氏からの講演を受け、夕食で起業家との懇談会が行われます。ここでは吉川欣也氏について調べてみようと思います。吉川欣也氏は日本インベストメント・ファイナンス(現大和企業投資)、独立系のシンクタンクを経て、1995年にデジタル・マジック・
            ラボ(DML)を設立。Apple、Fedex、ファミリーマート、プリンスホテルなど大手企業のWEB構築やコンサルを手がけており、DMLの社長・会長を歴任し2001年退社。1999年に米国San
            Joseに設立した IP Infusion
            社(次世代ネットワークソフトウエア開発)を創業、2006年に同社を5千万ドルでAccess社に売却。その後、Miselu(米国San
            Francisco) / Golden Whales (米国San Mateo)の創業者兼
            CEOを経て、2019年11月に株式会社REPUBLI9を創業しました。
          </p>
        </div>
      </div>
      <div className="lg:w-1/3 md:w-2/3 sm:w-10/12 w-full mx-auto mb-6">
        <div className="mx-5">
          <p className="mb-3 font-sans font-normal text-base leading-normal">
            2日目は昼食を挟んで2回アイデアソンをメンターの方とグループに分かれて行います。ルールを思い出して積極的に取り組みましょう。
          </p>
        </div>
      </div>
      <div className="lg:w-1/3 md:w-2/3 sm:w-10/12 w-full mx-auto mb-6">
        <div className="mx-5">
          <p className="mb-3 font-sans font-normal text-base leading-normal">
            3日目はGlideというホームレスなどを支援するNPOのメモリアルチャーチを見学します。その後にMLBの球場見学を行った後にBtraxのCEOであるBrandon氏に会うことができます。Btraxについては後述します。Btraxを出発して昼食を取ったらSandbox
            VR
            でVR(仮想現実)の技術を体感し、サンフランシスコの街を歩いたり、スーパーで買い物をしたらホテルに戻ります。では、さっき後回しにしたBtraxという会社についてです。BtraxはUXデザイン(User
            Experience)を軸に最適なユーザー体験を生み出し新たな価値の創出に貢献するデザイン会社です。読み方は「ビートラックス」で、サンフランシスコと東京に拠点を持ち、国内外さまざまな業界のクライアントさまのデザインパートナーとして伴走します。2004年設立以来、2000社を超えるグローバル企業へのサービス提供を行っており、サンフランシスコ(シリコンバレー)の最新トレンドを取り入れながら、革新的なデザイン、テクノロジー、ビジネス・ソリューションを提案していく仕事に取り組んでいます。
          </p>
        </div>
      </div>
      <div className="lg:w-1/3 md:w-2/3 sm:w-10/12 w-full mx-auto mb-6">
        <div className="mx-5">
          <p className="mb-3 font-sans font-normal text-base leading-normal">
            4日目はまずGoogleに訪問します。オフィス案内とQ&Aセッションがあります。質問を準備しておくと良いかもしれません。そして昼食を挟み次はスタンフォード大学でフィールドワークを行います。英語でミッションをクリアしていきます。積極的に行動していきましょう。最後にキャンパスツアーをしてブックストアでお土産購入をしてホテルに戻ります。
          </p>
        </div>
      </div>
      <div className="lg:w-1/3 md:w-2/3 sm:w-10/12 w-full mx-auto mb-6">
        <div className="mx-5">
          <p className="mb-3 font-sans font-normal text-base leading-normal">
            5日目はまず、元パロアルト市長のYoriko
            Kishimo氏にお話を伺います。こちらも色々な質問をして積極的に学んでいきましょう。そして、昼食後にApple
            Park Visitor Center を見学して、お土産を購入したのちにPlay Ground
            Globalという起業家たちを支援する会社です。社員さんからの講演の後に事業アイデアのプレゼンを行うので各自しっかりと準備をしておいてください。
            <br />
            6日目は特にないのでこれが最後となります。
          </p>
        </div>
      </div>
    </>
  );
}
