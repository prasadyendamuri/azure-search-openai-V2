import { Example } from "./Example";

import styles from "./Example.module.css";

const DEFAULT_EXAMPLES: string[] = [
    "What are the key initiatives/innovation/growth drivers/new business development the business is pursuing",
    "What happens in a performance review?",
    "Highlight changes to business model?",
    "Comments about company KPIs?",
    "Procurement strategies and commentary about inventory?",
    "Information about Foot traffic, Guest Count, Transaction Volume?",
    "What factors contributed to any changes in revenue?",
    "Are there any new risk factors mentioned in the report?",
    "How do the gross and net income figures compare to previous periods?",
    "How have the company's assets and liabilities changed since the last report?"
];

const GPT4V_EXAMPLES: string[] = [
    "Compare the impact of interest rates and GDP in financial markets.",
    "What is the expected trend for the S&P 500 index over the next five years? Compare it to the past S&P 500 performance",
    "Can you identify any correlation between oil prices and stock market trends?"
];

interface Props {
    onExampleClicked: (value: string) => void;
    useGPT4V?: boolean;
}

export const ExampleList = ({ onExampleClicked, useGPT4V }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {(useGPT4V ? GPT4V_EXAMPLES : DEFAULT_EXAMPLES).map((question, i) => (
                <li key={i}>
                    <Example text={question} value={question} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
