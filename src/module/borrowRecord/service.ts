import prisma from "../../config/prisma";

// interfaces.
interface TborrowR {
  bookId: string,
  memberId: string,
  borrowDate?:Date,
  returnDate?:Date,
  borrowId?:string
  
}







// 1.create
const create = async (payload: TborrowR) => {
  const result = await prisma.borrowRecord.create({
    data: payload
  });

  return result;
};

// 2.get all
const get_all = async () => {
  const result = await prisma.borrowRecord.findMany();
  return result;
};

// 3. get one
const get_one = async (id: string) => {
  const result = await prisma.borrowRecord.findFirst({
    where: {
      borrowId: id,
    },
  });
  return result
};

// 4. update
// const update_one = async(id:string,payload: Partial<TborrowR>) => {
//     const result=await prisma.book.update({
//         where:{
//             bookId:id
//         },
//         data:payload
//     })
//     return result
// };

// 5. delete one.
const delete_one = async(id: string) => {
    const result=await prisma.borrowRecord.delete({
        where:{
            borrowId:id
        }
    })
};

export default {
  create,
  get_all,
  get_one,
  // update_one,
  delete_one,
};
