function LoadingMessage({ message }) {
  return (
    <div className="pt-20 pb-20 p-5  bg-deep-gray border border-light-gray mb-6 rounded-xl flex justify-center">
      <p className="text-primary-gray text-[15px]">{message}</p>
    </div>
  );
}

export default LoadingMessage;
