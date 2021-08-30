var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  beforeResolver: () => beforeResolver,
  createPost: () => createPost,
  deletePost: () => deletePost,
  post: () => post,
  posts: () => posts,
  updatePost: () => updatePost
});
var import_db = __toModule(require("..\\..\\lib\\db"));
var import_auth = __toModule(require("..\\..\\lib\\auth"));
const beforeResolver = (rules) => {
  rules.add(import_auth.requireAuth);
};
const posts = () => {
  return import_db.db.post.findMany();
};
const post = ({
  id
}) => {
  return import_db.db.post.findUnique({
    where: {
      id
    }
  });
};
const createPost = ({
  input
}) => {
  return import_db.db.post.create({
    data: input
  });
};
const updatePost = ({
  id,
  input
}) => {
  return import_db.db.post.update({
    data: input,
    where: {
      id
    }
  });
};
const deletePost = ({
  id
}) => {
  return import_db.db.post.delete({
    where: {
      id
    }
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  beforeResolver,
  createPost,
  deletePost,
  post,
  posts,
  updatePost
});
//# sourceMappingURL=posts.js.map
