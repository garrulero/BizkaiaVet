import Image from "next/image";
import { reviews } from "./reviews-data";
import ReviewCard from "./review-card";

const GoogleLogo = () => (
    <Image src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDhweCI+PHBhdGggZmlsbD0iI0ZCQkMwNSIgZD0iTTQzLjYzIDE5LjY5QzQzLjYzIDE4LjA2IDQzLjQ5IDE2LjUgNDMuMjEgMTQuODlIMjQuNDFWMjguNThIMzUuMzFDMzQuNzggMzEuMDkgMzMuMjIgMzMuMjggMzAuOTcgMzQuODVWNDEuNDhINDJDMzguOSA0My4zNyA0My42MyAzOS42MyA0My42MyAxOS42OXoiLz48cGF0aCBmaWxsPSIjRTU1MzUzIiBkPSJNMjQuNDEgNDhDMzAuOTcgNDggMzYuNTYgNDUuODQgNDAgNDIuNDlMMzAuOTcgMzQuODVDMjguOTEgMzYuNDMgMjYuODEgMzcuNDIgMjQuNDEgMzcuNDJDMTguMjYgMzcuNDIgMTMuMTEgMzMuNDEgMTEuMzEgMjguMzZINy44OUM5LjcyIDM0LjYxIDE2LjQyIDQ4IDI0LjQxIDQ4eiIvPjxwYXRoIGZpbGw9IiM0Q0FGNTAiIGQ9Ik0xMS4zMSAyOC4zNkMxMC45MSAyNy4xNyAxMC43MSAyNS45NCAxMC43MSAyNC43QzEwLjcxIDIzLjQ2IDEwLjkxIDIyLjIzIDExLjMxIDIxLjA0VjE0LjAzSDIuODlDMS4wNSA5LjQ4IDEuMDUgNS40OCAyLjg5IDIuODlDNC43OCAyLjQxIDYuODYgMi4xNyA5LjA2IDIuMTRDMTQuMTMgMS45IDE5LjIuODMgMjQuMjgtLjA1TDI0LjQxIDBDMTYuNDIgMCA5LjcyIDEzLjM5IDcuODkgMTQuMDNDNi4wNSAxNC42NyA0LjIxIDE1LjkxIDMuMDIgMTcuNTlDMS44MiAxOS4yOCAxIDEyLjM0IDEgMTQuNzFDMSAxNy4wOCAxLjgyIDE4LjczIDMuMDIgMjAuNDFDMi4yMiAyMS4yNSAxLjQyIDIyLjA5IDEuNDIgMjMuMjdDMS40MiAyNC40NSAyLjIyIDI1LjI5IDMuMDIgMjYuMTNDNC4yMSAyNy44MSA2LjA1IDI5LjA1IDcuODkgMjkuNjNDOS43MiAzMC4yOCAxNi40MiA0OCAyNC40MSA0OEwyNC4yOCAzOC4wMUMxOS4yIDM2LjgzIDE0LjEzIDM1Ljc2IDkuMDYgMzUuNTNDNi44NiAzNS4yOSA0Ljc4IDM1LjAzIDIuODkgMzQuNzFDMS4wNSAzNC4xMyAxLjA1IDMwLjEzIDIuODkgMjcuNTlDMy42OSAyNi4zMyA0LjQ5IDI1LjA3IDUuMjkgMjMuODFDNi4wOSAyMi41NSA2Ljg5IDIxLjI5IDcuNjkgMjBDOC40OSAxOC43MSA5LjI5IDE3LjQxIDEwLjA5IDE2LjExQzEwLjg5IDE0LjgxIDExLjY5IDEzLjUxIDEyLjQ5IDEyLjIxQzEzLjI5IDExLjkyIDEwLjUxIDIyLjM5IDExLjMxIDIxLjA0WiIvPjxwYXRoIGZpbGw9IiM0Mjg1RTQiIGQ9Ik0yNC40MSA5Ljk4QzI3LjYyIDkuOTggMzAuMOCA4Ljg4IDMyLjM5IDYuNjVMMzkuOSA1Ljk2QzM1LjkzIDIuMzUgMzAuNDkgMCAyNC40MSAwQzE2LjQyIDAgOS43MiA1LjU5IDcuODkgMTQuMDNMMTEuMzEgMjEuMDRDMTMuMTEgMTQuOTkgMTguMjYgOS45OCAyNC40MSA5Ljk4eiIvPjwvc3ZnPg==" alt="Google logo" width={24} height={24} />
)

const Reviews = () => {
  return (
    <section id="reseñas" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
                <GoogleLogo />
                <h2 className="font-headline text-4xl md:text-5xl font-bold">Qué dicen nuestros clientes</h2>
            </div>
          <p className="mt-4 text-lg text-muted-foreground">
            El bienestar de tu mascota es nuestra mayor recompensa. Estas son algunas de nuestras reseñas de 5 estrellas en Google.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
