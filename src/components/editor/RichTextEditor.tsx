"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  List,
  ListOrdered,
  Quote,
  Link as LinkIcon,
  Unlink,
  AlignLeft,
  AlignCenter,
  AlignRight,
  RotateCcw,
  RotateCw,
  Code,
  Image as ImageIcon,
} from "lucide-react";

interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
  minHeight?: string;
}

export function RichTextEditor({
  value,
  onChange,
  placeholder = "내용을 입력하세요...",
  minHeight = "350px",
}: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [showHtml, setShowHtml] = useState(false);
  const [htmlSource, setHtmlSource] = useState("");
  const isUpdatingRef = useRef(false);

  useEffect(() => {
    if (!editorRef.current) return;
    if (isUpdatingRef.current) {
      isUpdatingRef.current = false;
      return;
    }
    const currentHtml = editorRef.current.innerHTML;
    let targetHtml = value || "";
    if (targetHtml && !/<[a-z][\s\S]*>/i.test(targetHtml)) {
      targetHtml = targetHtml.replace(/\n/g, "<br>");
    }
    if (currentHtml !== targetHtml) {
      editorRef.current.innerHTML = targetHtml;
      setHtmlSource(targetHtml);
    }
  }, [value]);

  const handleInput = () => {
    if (!editorRef.current) return;
    const newHtml = editorRef.current.innerHTML;
    isUpdatingRef.current = true;
    setHtmlSource(newHtml);
    onChange(newHtml);
  };

  const exec = (command: string, value: string | undefined = undefined) => {
    if (!editorRef.current) return;
    editorRef.current.focus();
    document.execCommand(command, false, value);
    handleInput();
  };

  const handleAddLink = () => {
    const selection = window.getSelection();
    const selectedText = selection?.toString();
    const url = prompt("링크 주소(URL)를 입력하세요:", "https://");
    if (!url || url === "https://") return;

    if (!selectedText) {
      const text = prompt("표시할 링크 텍스트를 입력하세요:", url);
      if (text) {
        exec(
          "insertHTML",
          `<a href="${url}" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">${text}</a>`
        );
      }
    } else {
      exec("createLink", url);
    }
  };

  const handleAddImage = () => {
    const url = prompt("삽입할 이미지 URL을 입력하세요:", "https://");
    if (url && url !== "https://") {
      exec(
        "insertHTML",
        `<p><img src="${url}" alt="이미지" style="max-width: 100%; height: auto; border-radius: 4px; margin: 8px 0;" /></p>`
      );
    }
  };

  const handleFontSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const size = e.target.value;
    if (!size) return;
    if (size.startsWith("h")) {
      exec("formatBlock", size);
    } else if (size === "p") {
      exec("formatBlock", "p");
    }
    e.target.value = "";
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    exec("foreColor", e.target.value);
  };

  const toggleSourceView = () => {
    if (showHtml) {
      if (editorRef.current) {
        editorRef.current.innerHTML = htmlSource;
      }
      onChange(htmlSource);
      setShowHtml(false);
    } else {
      if (editorRef.current) {
        setHtmlSource(editorRef.current.innerHTML);
      }
      setShowHtml(true);
    }
  };

  return (
    <div className="border border-gray-300 rounded-xl bg-white overflow-hidden shadow-sm focus-within:border-[#00387f] transition-colors">
      {/* 툴바 상단 영역 */}
      <div className="flex flex-wrap items-center gap-1 p-2 bg-[#f8fafc] border-b border-gray-200 text-gray-700 select-none">
        <button
          type="button"
          onClick={() => exec("undo")}
          title="실행 취소 (Ctrl+Z)"
          className="p-1.5 hover:bg-gray-200 rounded text-gray-600 cursor-pointer"
        >
          <RotateCcw size={15} />
        </button>
        <button
          type="button"
          onClick={() => exec("redo")}
          title="다시 실행 (Ctrl+Y)"
          className="p-1.5 hover:bg-gray-200 rounded text-gray-600 cursor-pointer"
        >
          <RotateCw size={15} />
        </button>

        <div className="w-[1px] h-5 bg-gray-300 mx-1" />

        <select
          onChange={handleFontSize}
          defaultValue=""
          className="h-7 text-xs px-2 border border-gray-300 rounded bg-white hover:border-gray-400 cursor-pointer text-gray-700 focus:outline-none"
        >
          <option value="" disabled>
            스타일/크기
          </option>
          <option value="p">본문 기본 (일반)</option>
          <option value="h1">대제목 (H1)</option>
          <option value="h2">중제목 (H2)</option>
          <option value="h3">소제목 (H3)</option>
        </select>

        <div className="w-[1px] h-5 bg-gray-300 mx-1" />

        <button
          type="button"
          onClick={() => exec("bold")}
          title="굵게 (Ctrl+B)"
          className="p-1.5 hover:bg-gray-200 rounded text-gray-700 font-bold cursor-pointer"
        >
          <Bold size={15} />
        </button>
        <button
          type="button"
          onClick={() => exec("italic")}
          title="기울임 (Ctrl+I)"
          className="p-1.5 hover:bg-gray-200 rounded text-gray-700 italic cursor-pointer"
        >
          <Italic size={15} />
        </button>
        <button
          type="button"
          onClick={() => exec("underline")}
          title="밑줄 (Ctrl+U)"
          className="p-1.5 hover:bg-gray-200 rounded text-gray-700 underline cursor-pointer"
        >
          <Underline size={15} />
        </button>
        <button
          type="button"
          onClick={() => exec("strikeThrough")}
          title="취소선"
          className="p-1.5 hover:bg-gray-200 rounded text-gray-700 line-through cursor-pointer"
        >
          <Strikethrough size={15} />
        </button>

        <label
          title="글자 색상"
          className="flex items-center gap-1 px-1.5 py-1 hover:bg-gray-200 rounded cursor-pointer text-xs"
        >
          <span className="font-bold underline text-blue-600">A</span>
          <input
            type="color"
            onChange={handleColorChange}
            defaultValue="#000000"
            className="w-4 h-4 p-0 border-0 cursor-pointer bg-transparent"
          />
        </label>

        <div className="w-[1px] h-5 bg-gray-300 mx-1" />

        <button
          type="button"
          onClick={() => exec("justifyLeft")}
          title="왼쪽 정렬"
          className="p-1.5 hover:bg-gray-200 rounded text-gray-600 cursor-pointer"
        >
          <AlignLeft size={15} />
        </button>
        <button
          type="button"
          onClick={() => exec("justifyCenter")}
          title="가운데 정렬"
          className="p-1.5 hover:bg-gray-200 rounded text-gray-600 cursor-pointer"
        >
          <AlignCenter size={15} />
        </button>
        <button
          type="button"
          onClick={() => exec("justifyRight")}
          title="오른쪽 정렬"
          className="p-1.5 hover:bg-gray-200 rounded text-gray-600 cursor-pointer"
        >
          <AlignRight size={15} />
        </button>

        <div className="w-[1px] h-5 bg-gray-300 mx-1" />

        <button
          type="button"
          onClick={() => exec("insertUnorderedList")}
          title="글머리 기호 (목록)"
          className="p-1.5 hover:bg-gray-200 rounded text-gray-600 cursor-pointer"
        >
          <List size={15} />
        </button>
        <button
          type="button"
          onClick={() => exec("insertOrderedList")}
          title="번호 매기기"
          className="p-1.5 hover:bg-gray-200 rounded text-gray-600 cursor-pointer"
        >
          <ListOrdered size={15} />
        </button>
        <button
          type="button"
          onClick={() => exec("formatBlock", "blockquote")}
          title="인용구 상자"
          className="p-1.5 hover:bg-gray-200 rounded text-gray-600 cursor-pointer"
        >
          <Quote size={15} />
        </button>

        <div className="w-[1px] h-5 bg-gray-300 mx-1" />

        <button
          type="button"
          onClick={handleAddLink}
          title="링크 삽입 (URL)"
          className="flex items-center gap-1 px-2.5 py-1 bg-blue-50 hover:bg-blue-100 text-[#00387f] rounded-lg text-xs font-bold cursor-pointer border border-blue-200"
        >
          <LinkIcon size={14} />
          <span>링크</span>
        </button>
        <button
          type="button"
          onClick={() => exec("unlink")}
          title="링크 제거"
          className="p-1.5 hover:bg-gray-200 rounded text-gray-600 cursor-pointer"
        >
          <Unlink size={15} />
        </button>
        <button
          type="button"
          onClick={handleAddImage}
          title="이미지 URL 삽입"
          className="p-1.5 hover:bg-gray-200 rounded text-gray-600 cursor-pointer"
        >
          <ImageIcon size={15} />
        </button>

        <div className="flex-1" />

        <button
          type="button"
          onClick={toggleSourceView}
          className={`flex items-center gap-1 px-2.5 py-1 text-xs rounded-lg font-medium cursor-pointer transition-colors ${
            showHtml
              ? "bg-gray-800 text-white"
              : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
          title="HTML 소스 직접 편집"
        >
          <Code size={13} />
          <span>{showHtml ? "에디터 보기" : "HTML 소스"}</span>
        </button>
      </div>

      {showHtml ? (
        <textarea
          value={htmlSource}
          onChange={(e) => {
            setHtmlSource(e.target.value);
            onChange(e.target.value);
          }}
          className="w-full p-4 font-mono text-xs text-gray-800 bg-gray-50 border-0 focus:outline-none resize-y leading-relaxed"
          style={{ minHeight }}
        />
      ) : (
        <div
          ref={editorRef}
          contentEditable
          onInput={handleInput}
          onBlur={handleInput}
          style={{ minHeight }}
          data-placeholder={placeholder}
          className="w-full p-4 text-sm leading-relaxed text-gray-900 bg-white focus:outline-none overflow-y-auto cursor-text
            [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:my-3
            [&_h2]:text-xl [&_h2]:font-bold [&_h2]:my-2.5
            [&_h3]:text-lg [&_h3]:font-bold [&_h3]:my-2
            [&_p]:my-2
            [&_blockquote]:border-l-4 [&_blockquote]:border-blue-500 [&_blockquote]:pl-3 [&_blockquote]:italic [&_blockquote]:text-gray-600 [&_blockquote]:my-3
            [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:my-2
            [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:my-2
            [&_a]:text-blue-600 [&_a]:underline [&_a]:font-medium
            empty:before:content-[attr(data-placeholder)] empty:before:text-gray-400 empty:before:pointer-events-none"
        />
      )}
    </div>
  );
}

