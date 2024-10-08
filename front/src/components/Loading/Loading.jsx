const Loading = ({ color = "text-gray-500", message = "Loading data..." }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <p className={`${color} text-lg`}>{message}</p>
      <div className="inline-block animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
};

export default Loading;
