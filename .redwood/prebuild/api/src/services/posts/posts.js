import { db } from "..\\..\\lib\\db";
import { requireAuth } from "..\\..\\lib\\auth"; // Used when the environment variable REDWOOD_SECURE_SERVICES=1

export const beforeResolver = rules => {
  rules.add(requireAuth);
};
export const posts = () => {
  return db.post.findMany();
};
export const post = ({
  id
}) => {
  return db.post.findUnique({
    where: {
      id
    }
  });
};
export const createPost = ({
  input
}) => {
  return db.post.create({
    data: input
  });
};
export const updatePost = ({
  id,
  input
}) => {
  return db.post.update({
    data: input,
    where: {
      id
    }
  });
};
export const deletePost = ({
  id
}) => {
  return db.post.delete({
    where: {
      id
    }
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FwaS9zcmMvc2VydmljZXMvcG9zdHMvcG9zdHMuanMiXSwibmFtZXMiOlsiZGIiLCJyZXF1aXJlQXV0aCIsImJlZm9yZVJlc29sdmVyIiwicnVsZXMiLCJhZGQiLCJwb3N0cyIsInBvc3QiLCJmaW5kTWFueSIsImlkIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiY3JlYXRlUG9zdCIsImlucHV0IiwiY3JlYXRlIiwiZGF0YSIsInVwZGF0ZVBvc3QiLCJ1cGRhdGUiLCJkZWxldGVQb3N0IiwiZGVsZXRlIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxFQUFUO0FBQ0EsU0FBU0MsV0FBVCw0QixDQUVBOztBQUNBLE9BQU8sTUFBTUMsY0FBYyxHQUFJQyxLQUFELElBQVc7QUFDdkNBLEVBQUFBLEtBQUssQ0FBQ0MsR0FBTixDQUFVSCxXQUFWO0FBQ0QsQ0FGTTtBQUlQLE9BQU8sTUFBTUksS0FBSyxHQUFHLE1BQU07QUFDekIsU0FBT0wsRUFBRSxDQUFDTSxJQUFILENBQVFDLFFBQVIsRUFBUDtBQUNELENBRk07QUFJUCxPQUFPLE1BQU1ELElBQUksR0FBRyxDQUFDO0FBQUVFLEVBQUFBO0FBQUYsQ0FBRCxLQUFZO0FBQzlCLFNBQU9SLEVBQUUsQ0FBQ00sSUFBSCxDQUFRRyxVQUFSLENBQW1CO0FBQ3hCQyxJQUFBQSxLQUFLLEVBQUU7QUFBRUYsTUFBQUE7QUFBRjtBQURpQixHQUFuQixDQUFQO0FBR0QsQ0FKTTtBQU1QLE9BQU8sTUFBTUcsVUFBVSxHQUFHLENBQUM7QUFBRUMsRUFBQUE7QUFBRixDQUFELEtBQWU7QUFDdkMsU0FBT1osRUFBRSxDQUFDTSxJQUFILENBQVFPLE1BQVIsQ0FBZTtBQUNwQkMsSUFBQUEsSUFBSSxFQUFFRjtBQURjLEdBQWYsQ0FBUDtBQUdELENBSk07QUFNUCxPQUFPLE1BQU1HLFVBQVUsR0FBRyxDQUFDO0FBQUVQLEVBQUFBLEVBQUY7QUFBTUksRUFBQUE7QUFBTixDQUFELEtBQW1CO0FBQzNDLFNBQU9aLEVBQUUsQ0FBQ00sSUFBSCxDQUFRVSxNQUFSLENBQWU7QUFDcEJGLElBQUFBLElBQUksRUFBRUYsS0FEYztBQUVwQkYsSUFBQUEsS0FBSyxFQUFFO0FBQUVGLE1BQUFBO0FBQUY7QUFGYSxHQUFmLENBQVA7QUFJRCxDQUxNO0FBT1AsT0FBTyxNQUFNUyxVQUFVLEdBQUcsQ0FBQztBQUFFVCxFQUFBQTtBQUFGLENBQUQsS0FBWTtBQUNwQyxTQUFPUixFQUFFLENBQUNNLElBQUgsQ0FBUVksTUFBUixDQUFlO0FBQ3BCUixJQUFBQSxLQUFLLEVBQUU7QUFBRUYsTUFBQUE7QUFBRjtBQURhLEdBQWYsQ0FBUDtBQUdELENBSk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYiB9IGZyb20gJ3NyYy9saWIvZGInXHJcbmltcG9ydCB7IHJlcXVpcmVBdXRoIH0gZnJvbSAnc3JjL2xpYi9hdXRoJ1xyXG5cclxuLy8gVXNlZCB3aGVuIHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZSBSRURXT09EX1NFQ1VSRV9TRVJWSUNFUz0xXHJcbmV4cG9ydCBjb25zdCBiZWZvcmVSZXNvbHZlciA9IChydWxlcykgPT4ge1xyXG4gIHJ1bGVzLmFkZChyZXF1aXJlQXV0aClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RzID0gKCkgPT4ge1xyXG4gIHJldHVybiBkYi5wb3N0LmZpbmRNYW55KClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3QgPSAoeyBpZCB9KSA9PiB7XHJcbiAgcmV0dXJuIGRiLnBvc3QuZmluZFVuaXF1ZSh7XHJcbiAgICB3aGVyZTogeyBpZCB9LFxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVQb3N0ID0gKHsgaW5wdXQgfSkgPT4ge1xyXG4gIHJldHVybiBkYi5wb3N0LmNyZWF0ZSh7XHJcbiAgICBkYXRhOiBpbnB1dCxcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlUG9zdCA9ICh7IGlkLCBpbnB1dCB9KSA9PiB7XHJcbiAgcmV0dXJuIGRiLnBvc3QudXBkYXRlKHtcclxuICAgIGRhdGE6IGlucHV0LFxyXG4gICAgd2hlcmU6IHsgaWQgfSxcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlUG9zdCA9ICh7IGlkIH0pID0+IHtcclxuICByZXR1cm4gZGIucG9zdC5kZWxldGUoe1xyXG4gICAgd2hlcmU6IHsgaWQgfSxcclxuICB9KVxyXG59XHJcbiJdfQ==