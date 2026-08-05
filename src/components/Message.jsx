function Message({ message, messageTwo, baseCurrency, quoteCurrency }) {
  return (
    <div className="pt-15 pb-15 p-0 bg-deep-gray border border-light-gray mb-6 rounded-xl flex items-center flex-col">
      <h1 className="text-[18px] text-white">{message}</h1>
      <p className="mt-3 text-primary-gray text-center text-[14px] w-[80%]">
        {messageTwo}
      </p>
    </div>
  );
}

export default Message;
