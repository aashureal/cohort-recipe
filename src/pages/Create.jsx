import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipectx } from "../context/RecipeContext";

const Create = () => {
  const { data, setData } = useContext(recipectx);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   Form Submit Handler
  const SubmitHandler = (formData) => {
    formData.id = nanoid();
    console.log(formData);

    setData((prev) => [...prev, formData]);

    console.log(data);

    reset({
      title: "",
      description: "",
      ingredients: "",
      url: "",
      category: "",
    });
  };

  return (
    <div className="px-20">
      <form
        onSubmit={handleSubmit(SubmitHandler)}
        className="flex flex-col gap-5 w-[25rem]"
      >
        {/* Input Group */}
        <div className="input__group w-full">
          <input
            className="px-5 py-2 border border-zinc-600 bg-transparent outline-none rounded-xl w-full"
            type="text"
            {...register("title", {
              required: "Title is required..!",
            })}
            placeholder="Recipe Title.."
          />

          {errors.title && (
            <small className="text-red-500">{errors.title.message}</small>
          )}
        </div>

        {/* Input Group */}
        <div className="input__group w-full">
          <textarea
            className="px-5 py-2 border border-zinc-600 bg-transparent outline-none rounded-xl w-full"
            type="text"
            {...register("description", {
              required: "Description is required..!",
            })}
            placeholder="Description.."
          ></textarea>

          {errors.description && (
            <small className="text-red-500">{errors.description.message}</small>
          )}
        </div>
        {/* Input Group */}
        <div className="input__group w-full">
          <textarea
            className="px-5 py-2 border border-zinc-600 bg-transparent outline-none rounded-xl w-full"
            type="text"
            {...register("ingredients", {
              required: "Ingredients is required..!",
            })}
            placeholder="Ingredients.."
          ></textarea>

          {errors.ingredients && (
            <small className="text-red-500">{errors.ingredients.message}</small>
          )}
        </div>

        {/* Input Group */}
        <div className="input__group w-full">
          <input
            className="px-5 py-2 border border-zinc-600 bg-transparent outline-none rounded-xl w-full"
            type="text"
            {...register("url", {
              required: "Image URL is required..!",
            })}
            placeholder="Image URL.."
          />

          {errors.url && (
            <small className="text-red-500">{errors.url.message}</small>
          )}
        </div>

        {/* Input Group */}
        <div className="input__group w-full">
          <select
            className="px-5 py-2 border border-zinc-600 bg-transparent outline-none rounded-xl w-full"
            type="text"
            {...register("category", {
              required: "Category is required..!",
            })}
            defaultValue={""}
          >
            <option className="bg-zinc-600" disabled value="">
              Select Category
            </option>
            <option className="bg-zinc-600" value="cat-1">
              Category 1
            </option>
            <option className="bg-zinc-600" value="cat-2">
              Category 2
            </option>
            <option className="bg-zinc-600" value="cat-3">
              Category 3
            </option>
          </select>

          {errors.category && (
            <small className="text-red-500">{errors.category.message}</small>
          )}
        </div>

        <button className="px-5 py-2 bg-zinc-300 text-black rounded-xl cursor-pointer hover:bg-zinc-100">
          Create Recipe
        </button>
      </form>
    </div>
  );
};

export default Create;
