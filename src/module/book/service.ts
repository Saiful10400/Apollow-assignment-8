import prisma from "../../config/prisma";

// interfaces.
interface Tbook {
  title: string;
  genre: string;
  publishedYear: number;
  totalCopies: number;
  availableCopies: number;
}

// 1.create
const create = async (payload: Tbook) => {
  const result = await prisma.book.create({
    data: payload,
  });

  return result;
};

// 2.get all
const get_all = async () => {
  const result = await prisma.book.findMany();
  return result;
};

// 3. get one
const get_one = async (id: string) => {
  const result = await prisma.book.findFirst({
    where: {
      bookId: id,
    },
  });
  return result
};

// 4. update
const update_one = async(id:string,payload: Partial<Tbook>) => {
    const result=await prisma.book.update({
        where:{
            bookId:id
        },
        data:payload
    })
    return result
};

// 5. delete one.
const delete_one = async(id: string) => {
    const result=await prisma.book.delete({
        where:{
            bookId:id
        }
    })
};

export default {
  create,
  get_all,
  get_one,
  update_one,
  delete_one,
};
