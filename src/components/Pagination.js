// function Pagination({ totalPosts, postsPerPage, setPage }) {
//   let pages = [];

//   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//     pages.push(i);
//   }

//   return (
//     <>
//       <div className="pagination">
//         {pages.map((page, index) => {
//           return (
//             <button
//               key={index}
//               onClick={() => {
//                 setPage(page);
//               }}
//             >
//               {page}
//             </button>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export default Pagination;

function Pagination({ totalPosts, postsPerPage, setPage }) {
  let array = [];
  let totalpages = Math.ceil(totalPosts / postsPerPage);
  console.log("test", totalPosts, postsPerPage, setPage);
  for (let i = 1; i <= totalpages; i++) {
    let start;
    i == 1 ? (start = i) : (start = (i - 1) * postsPerPage + 1);
    let end = i * postsPerPage;
    if (end > totalPosts) {
      end = totalPosts;
    }
    array.push(`${start} - ${end}`);
  }

  console.log(array);

  const handleChaange = (e) => {
    setPage(Number(e.target.value));
  };

  return (
    <>
      <select onChange={handleChaange}>
        {array.map((arr, index) => {
          return (
            <option key={index} value={index}>
              {arr}
              {console.log(index, arr)}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default Pagination;
