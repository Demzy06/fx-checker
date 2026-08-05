function PreviewTab({ text, data, className, icon }) {
  return (
    <div className="rounded-2xl p-3 pr-0 pl-4 bg-deep-gray border border-[#2E2E2E]">
      <p className="text-primary-gray uppercase mb-3">{text}</p>
      <span className="flex items-center">
        {icon && <img src={icon} className="mr-1" />}
        <p className={className}>{data}</p>
      </span>
    </div>
  );
}

export default PreviewTab;
