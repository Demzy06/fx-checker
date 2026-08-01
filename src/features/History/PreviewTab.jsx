function PreviewTab({ text, data }) {
  return (
    <div className="rounded-2xl p-3 pr-0 pl-4 bg-deep-gray border border-[#2E2E2E]">
      <p className="text-primary-gray uppercase mb-3">{text}</p>
      <p className="text-white text-[17px]">{data}</p>
    </div>
  );
}

export default PreviewTab;
