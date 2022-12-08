import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { Select } from "../components/Select.tsx";
import TextArea from "../components/Textarea.tsx";

const languages = [
  {
    name: "Plain Text",
    value: "txt",
  },
  {
    name: "TypeScript",
    value: "ts",
  },
  {
    name: "JavaScript",
    value: "js",
  },
  {
    name: "HTML",
    value: "html",
  },
  {
    name: "Markdown",
    value: "md",
  },
  {
    name: "Go",
    value: "go",
  },
  {
    name: "Python",
    value: "py",
  },
];

const Home = () => {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("txt");
  const [loading, setLoading] = useState(false);

  const onShare = async () => {
    setLoading(true);
    const res = await fetch("/api/create", {
      method: "POST",
      body: JSON.stringify({
        content: text,
        type: language,
      }),
    });
    const data = await res.json();
    window.location.pathname = `/${data.id}`;
  };

  return (
    <div>
      <TextArea
        placeholder="Paste your code or text here..."
        rows={15}
        onChange={(e) => setText((e.target as HTMLInputElement).value)}
      />
      <div class="flex gap-2 w-full mt-4">
        <Button
          onClick={onShare}
          disabled={loading}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-1/2"
        >
          {loading ? "Saving..." : "Share"}
        </Button>
        <Select
          onChange={(e) => setLanguage((e.target as HTMLInputElement).value)}
          defaultValue={language}
        >
          {languages.map((language) => (
            <option value={language.value}>{language.name}</option>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default Home;
