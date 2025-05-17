import { Teaching } from "@/data/teaching";

export function TeachingEntry({ teaching }: { teaching: Teaching }) {
  return (
    <div>
      <div className="grid grid-cols-4 gap-x-2 mb-2">
        <span className="text-xs text-zinc-500 mt-1">{teaching.year}</span>
        <div className="col-span-3">
          <h3 className="text-base mb-1 font-serif">{teaching.institution}</h3>
          <p className="text-sm text-zinc-600">{teaching.degree}</p>
          {teaching.advisor && (
            <p className="text-sm text-zinc-500 mt-2 italic">
              Advisor: {teaching.advisor}
            </p>
          )}
          {teaching.thesis && (
            <p className="text-sm text-zinc-500 mt-2 italic">
              Thesis:{" "}
              {teaching.thesisUrl ? (
                <a
                  href={teaching.thesisUrl}
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {teaching.thesis}
                </a>
              ) : (
                teaching.thesis
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
