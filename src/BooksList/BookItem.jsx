// import { Flex } from "rebass/styled-components";
// import { useQuery } from "react-query";
// import { getAllBooks } from "../App/api";
// import Loader from "react-loader-spinner";
// import React  from 'react';
// import * as _ from 'lodash';

// export const BooksList = () => {
//   const { data, error, isLoading, isError } = useQuery("articles", getAllBooks);

//   if (isLoading) {
//     return (
//         <Flex py="5" justifyContent="center">
//           <Loader type="ThreeDots" color="#cccccc" height={30} />;
//         </Flex>
//     );
//   }

//   if (isError) {
//     return <span>Error: {error.message}</span>;
//   }
//   if (data) {
//     console.log("sfdfsdfsfd", data.title)
//     return (    <div className="band">

//     { _.map([data[0]],(data, index) => { return <BookItem data={data} ind={index} />})}</div>
//   )
//   }
  
// };

// const BookItem = ({data, ind}) => {
//   return (
//         <div className={"item-" + (Number(ind)+1).toString()}>
//           <a href={data.url} className="card">
//             <div className="thumb" style={{ backgroundImage: `url(${data.urlToImage})` }} />
//             <article>
//               <h1>{data.title}</h1>
//               <span>{data.author}</span>
//             </article>
//           </a>
//         </div>
//   )}



// // export const BookItem = ({data, ind}) => {
// //   const queryClient = useQueryClient()
// //   // const { mutateAsync, isLoading } = useMutation(removeBook)

// //   // const remove = async () => {
// //   //   await mutateAsync(id)
// //   //   queryClient.invalidateQueries('books')
// //   // }
// //   return (
       
// //             <div className={"item-" + (Number(ind)+1).toString()}>
// //               <a href={data.url} className="card">
// //                 <div className="thumb" style={{ backgroundImage: `url(${data.urlToImage})` }} />
// //                 <article>
// //                   <h1>{data.title}</h1>
// //                   <span>{data.author}</span>
// //                 </article>
// //               </a>
// //             </div>
// //   )
// // };
