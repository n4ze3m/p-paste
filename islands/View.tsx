import { Button } from "../components/Button.tsx";

interface Paste {
  id: string;
  content: string;
  type: string;
}

export default function View({ content }: Paste) {
  return (
    <div>
      <div class="flex gap-2 w-full mt-4 justify-end">
        <Button
          onClick={() => {
            navigator.share({
              title: "Share",
              text: content,
              url: window.location.href,
            });
          }}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Share link
        </Button>
        <Button
          onClick={() => {
            navigator.clipboard.writeText(content);
            alert("Copied to clipboard!");
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Copy to clipboard
        </Button>
      </div>
    </div>
  );
}
