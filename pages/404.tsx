import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

export default function Index() {
  return (
    <>
      <Head>
        <title>Aman Raj · AmanRaj1608</title>
      </Head>
      <Navbar />
      <main>
        <section>
          <div className="sec_title">
            <h2>404</h2>
            <p>This page might be WIP.</p>
          </div>
        </section>

        <section style={{ minHeight: "70vh" }}>
          <div
            className="tenor-gif-embed"
            data-postid="16232077"
            data-share-method="host"
            data-aspect-ratio="1.35021"
            data-width="100%"
            style={{ maxWidth: 400, margin: "auto" }}
          >
            <a href="https://tenor.com/view/chat-cat-dance-shake-moves-gif-16232077">
              Chat Cat Sticker
            </a>
            from{" "}
            <a href="https://tenor.com/search/chat-stickers">Chat Stickers</a>
          </div>{" "}
          <Script src="https://tenor.com/embed.js"></Script>
        </section>
      </main>
      <Footer />
    </>
  );
}
