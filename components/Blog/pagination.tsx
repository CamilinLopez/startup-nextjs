'use client'

const Pagination = ({ blogsPerPage }) => {

  const page = ["Prev", "Next"];

  const handleClick = (pag) => {
    blogsPerPage(pag)
  };
  return (
    <>
      <div className="w-full px-4">
        <ul className="flex items-center justify-center pt-8">
          {page.map((item, key) => (
            <li className="mx-1" key={key}>
              <button
                onClick={()=>handleClick({item})}
                className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Pagination;
