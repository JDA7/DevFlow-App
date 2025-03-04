import React from "react";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import Image from "next/image";
import TagCard from "../cards/TagCard";

const hotQuestions = [
    { _id: "1", title: "How to create a custom hook in React?" },
    {
        _id: "2",
        title: "What is the difference between props and state in React?",
    },
    {
        _id: "3",
        title: "What is the difference between useEffect and useState in React?",
    },
    {
        _id: "4",
        title: "What is the difference between useEffect and useLayoutEffect in React?",
    },
    {
        _id: "5",
        title: "How to use useRef in React to access DOM elements?",
    },
];

const popularTags = [
    { _id: "1", name: "react", questions: 100 },
    { _id: "2", name: "javascript", questions: 200 },
    { _id: "3", name: "redux", questions: 75 },
    { _id: "4", name: "nextjs", questions: 150 },
    { _id: "5", name: "typescript", questions: 115 },
];

const RightSidebar = () => {
    return (
        <section className="pt-36 custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 h-screen w-[350px] flex flex-col gap-6 overflow-y-auto border-l p-6 shadow-light-300 dark:shadow-none max-xl:hidden">
            <div>
                <h3 className="h3-bold text-dark-200_light900">
                    Top Questions
                </h3>

                <div className="mt-7 flex w-full flex-col gap-[30px]">
                    {hotQuestions.map(({ _id, title }) => (
                        <Link
                            href={ROUTES.PROFILE(_id)}
                            key={_id}
                            className="flex cursor-pointer items-center justify-between gap-7"
                        >
                            <p className="body-medium text-dark-500_light700">
                                {title}
                            </p>
                            <Image
                                src="/icons/chevron-right.svg"
                                alt="Chevron"
                                width={20}
                                height={20}
                                className="invert-colors"
                            />
                        </Link>
                    ))}
                </div>
            </div>

            <div className="mt-16">
                <h3 className="h3-bold text-dark-200_light900">Popular Tags</h3>
                <div className="mt-7 flex flex-col gap-4">
                    {popularTags.map(({ _id, name, questions }) => (
                        <TagCard
                            key={_id}
                            _id={_id}
                            name={name}
                            questions={questions}
                            showCount
                            compact
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RightSidebar;
