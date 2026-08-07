function PreviewTab({ text, data, className, icon }) {
  return (
    <div className="rounded-2xl p-3 pr-0 pl-4 bg-deep-gray border border-lightbg-gray md:p-3 md:pr-9 md:pl-4">
      <p className="text-primary-gray uppercase mb-3 md:mb-2 md:text-[14px]">
        {text}
      </p>
      <span className="flex items-center">
        {icon && <img src={icon} className="mr-1" />}
        <p className={className}>{!data ? "-" : data}</p>
      </span>
    </div>
  );
}

export default PreviewTab;
