"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type ShelfBook = {
  title: string;
  author?: string;
  status: "reading" | "read";
};

type BookWithCover = ShelfBook & {
  cover?: string;
};

async function fetchCover(title: string, author?: string) {
  const qParts = [`intitle:${title}`];
  if (author) qParts.push(`inauthor:${author}`);

  const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
    qParts.join(" ")
  )}&maxResults=1`;

  const res = await fetch(url);
  const data = await res.json();

  const item = data.items?.[0];
  const thumb =
    item?.volumeInfo?.imageLinks?.thumbnail ||
    item?.volumeInfo?.imageLinks?.smallThumbnail;

  return thumb ? thumb.replace("http://", "https://") : undefined;
}

function SectionCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        rounded-2xl p-5 ring-1
        bg-[rgb(var(--card))]
        ring-[rgb(var(--border))]
      "
    >
      {children}
    </div>
  );
}

function Shelf({ items }: { items: BookWithCover[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
      {items.map((book) => (
        <div
          key={`${book.title}-${book.author ?? ""}-${book.status}`}
          className="
            rounded-xl p-3 ring-1 transition
            bg-[rgb(var(--card))]
            ring-[rgb(var(--border))]
            hover:shadow-md
          "
        >
          {book.cover ? (
            <Image
              src={book.cover}
              alt={book.title}
              width={140}
              height={210}
              className="mx-auto rounded-md"
            />
          ) : (
            <div
              className="
                flex h-[210px] items-center justify-center rounded-md text-xs
                bg-black/5 text-[rgb(var(--muted))]
                dark:bg-white/5
              "
            >
              No cover found
            </div>
          )}

          <p className="mt-2 line-clamp-2 text-xs font-medium text-[rgb(var(--foreground))]">
            {book.title}
          </p>
          {book.author ? (
            <p className="mt-1 line-clamp-1 text-[11px] text-[rgb(var(--muted))]">
              {book.author}
            </p>
          ) : (
            <p className="mt-1 text-[11px] text-[rgb(var(--muted))]">&nbsp;</p>
          )}
        </div>
      ))}
    </div>
  );
}

function Polaroid({
  src,
  location,
  rotateClass,
}: {
  src: string;
  location: string;
  rotateClass: string;
}) {
  return (
    <figure
      className={`
        group w-[210px]
        ${rotateClass}
        transition-transform duration-200 hover:rotate-0 hover:-translate-y-1
      `}
    >
      <div
        className="
          rounded-lg p-3 pb-7 shadow-md ring-1
          bg-neutral-50 ring-black/10
          dark:bg-neutral-900 dark:ring-white/10
        "
      >
        <div className="relative h-[210px] w-full overflow-hidden rounded-md">
          <Image src={src} alt={location} fill className="object-cover" sizes="210px" />
        </div>

        <figcaption className="mt-3 text-center text-sm font-medium text-neutral-800 dark:text-neutral-100">
          {location}
        </figcaption>
      </div>
    </figure>
  );
}

export default function OutsideWork() {
  const myBooks: ShelfBook[] = useMemo(
    () => [
      {
        title: "Don't Believe Everything You Think",
        author: "Joseph Nguyen",
        status: "read",
      },
      { title: "Dopamine Nation", author: "Anna Lembke", status: "reading" },
      { title: "Wisdom Takes Work", status: "reading" },
      { title: "The Psychology of Money", author: "Morgan Housel", status: "reading" },
      { title: "The Silent Patient", author: "Alex Michaelides", status: "reading" },
    ],
    []
  );

  const [books, setBooks] = useState<BookWithCover[]>([]);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const withCovers = await Promise.all(
        myBooks.map(async (b) => {
          const cover = await fetchCover(b.title, b.author);
          return { ...b, cover };
        })
      );
      if (!cancelled) setBooks(withCovers);
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [myBooks]);

  const currentlyReading = books.filter((b) => b.status === "reading");

  return (
    <section id="outside-work" className="scroll-mt-24">
      <div className="mb-8">
        <h2 className="text-xl font-semibold">Outside of Work</h2>
        <p className="mt-2 text-[15px] leading-7 text-[rgb(var(--muted))]">
          A few things that describe me outside of work. Here are some of my most recent and 
          favorite photos I've taken, as well as books I'm currently reading.
        </p>
      </div>

      {/* PHOTOS FIRST */}
      <div className="mb-12">
        <h3
          className="
            text-3xl md:text-4xl
            tracking-tight
            font-semibold
            font-mono
            text-[rgb(var(--foreground))]
          "
        >
          Some of my favorite photos
        </h3>

        <div className="mt-8 flex flex-wrap justify-center gap-8 md:justify-start">
          <Polaroid src="/guitar.JPEG" location="Arlington, TX" rotateClass="-rotate-2" />
          <Polaroid src="/image1.jpg" location="Dallas, TX" rotateClass="rotate-1" />
          <Polaroid src="/sites2.JPG" location="California, San Diego" rotateClass="-rotate-1" />
          <Polaroid src="/sites1.JPG" location="Chicago" rotateClass="rotate-2" />
          <Polaroid src="/sites3.JPG" location="California, San Diego" rotateClass="-rotate-1" />
        </div>
      </div>

      {/* BOOKS SECOND (gamified title) */}
      <div className="mb-4">
        <h3
          className="
            text-3xl md:text-4xl
            tracking-tight
            font-semibold
            font-mono
            text-[rgb(var(--foreground))]
          "
        >
          Books I’m currently reading
        </h3>
      </div>

      <SectionCard>
        <div className="mb-4 flex items-baseline justify-between">
          <span className="text-sm font-medium uppercase tracking-wide text-[rgb(var(--muted))]">
            Currently Reading
          </span>
          <span className="text-xs text-[rgb(var(--muted))]">{currentlyReading.length}</span>
        </div>

        <Shelf items={currentlyReading} />
      </SectionCard>
    </section>
  );
}
