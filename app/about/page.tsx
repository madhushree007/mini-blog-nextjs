import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us ",
    description: "This is about us page.",
  };

export default function AboutPage() {
    return (
        <main>
            <h1>
                About Us
            </h1>
            <p>This is about us page.</p>
        </main>
    )
}