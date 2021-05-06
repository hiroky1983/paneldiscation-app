import "tailwindcss/tailwind.css";

export default function Panel(props) {
  const { themes, onClickComplete, onClickDelete } = props;
  return (
    <div>
      <ul>
        {themes.map((theme, index) => {
          return (
            <div key={theme}>
              <li>
                <div class="bg-white p-6 shadow-lg rounded-lg flex justify-between items-center mx-6 my-1">
                  <div className="flex">
                    <div className="ml-5">
                      <p className="text-gray-600 ">{theme}</p>
                    </div>
                  </div>
                  <div>
                    <button
                      className="bg-blue-500 hover:opacity-75 text-white rounded-full px-8 py-2 focus:outline-none"
                      onClick={() => onClickComplete(index)}
                    >
                      完了
                    </button>
                    <button
                      className="bg-blue-500 hover:opacity-75 text-white rounded-full px-8 py-2 focus:outline-none"
                      onClick={() => onClickDelete(index)}
                    >
                      削除
                    </button>
                  </div>
                </div>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
