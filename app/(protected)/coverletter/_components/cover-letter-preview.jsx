"use client";

import React from "react";
import MDEditor from "@uiw/react-md-editor";

const CoverLetterPreview = ({ content }) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
      <MDEditor value={content} preview="preview" height={720} />
    </div>
  );
};

export default CoverLetterPreview;
