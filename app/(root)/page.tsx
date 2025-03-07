import { auth, signOut } from "@/auth";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";

const questions = [
    {
        _id: "1",
        title: "How to learn React?",
        description: "What is the best way to learn React?",
        tags: ["react", "javascript"],
        author: { _id: "1", name: "John Doe" },
        upvotes: 10,
        answers: 5,
        views: 100,
        createdAt: new Date(),
    },
    {
        _id: "2",
        title: "What is the best way to learn Next.js?",
        description: "What is the best way to learn Next.js?",
        tags: ["react", "javascript", "next.js"],
        author: { _id: "1", name: "John Doe" },
        upvotes: 10,
        answers: 5,
        views: 100,
        createdAt: new Date(),
    },
];

interface SearchParams {
    searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
    const { query = "" } = await searchParams;

    const filteredQuestions = questions.filter((question) =>
        question.title.toLowerCase().includes(query?.toLowerCase())
    );

    return (
        <>
            <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
                <h1 className="h1-bold text-dark100_light900">All Questions</h1>
                <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
                    <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
                </Button>
            </section>
            <section className="mt-11">
                <LocalSearch
                    route="/"
                    imgSrc="/icons/search.svg"
                    placeholder="Search questions..."
                    otherClasses="flex-1"
                />
            </section>
            {/* HomeFilter */}
            <div className="mt-10 flex w-full flex-col gap-6">
                {filteredQuestions.map((question) => (
                    <h1 key={question._id}>{question.title}</h1>
                ))}
            </div>
        </>
    );
};

export default Home;
