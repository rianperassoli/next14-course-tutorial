"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";

export const getAllTasks = async () => {
  return prisma.task.findMany({ orderBy: { createdAt: "desc" } });
};

export const createTask = async (formData) => {
  const content = formData.get("content");

  await prisma.task.create({ data: { content } });
  revalidatePath("/tasks");
};

export const createTaskCustom = async (prevState, formData) => {
  //   await new Promise((resolve) => setTimeout(resolve, 1000));

  const content = formData.get("content");

  try {
    await prisma.task.create({ data: { content } });
    revalidatePath("/tasks");
    return { message: "sucess!!!" };
  } catch (error) {
    return { message: "error..." };
  }
};

export const deleteTask = async (formData) => {
  const id = formData.get("id");
  await prisma.task.delete({ where: { id } });

  revalidatePath("/tasks");
};

export const getTask = async (id) => {
  return prisma.task.findUnique({ where: { id } });
};

export const editTask = async (formData) => {
  const id = formData.get("id");
  const content = formData.get("content");
  const completed = formData.get("completed") === "on";

  await prisma.task.update({ where: { id }, data: { content, completed } });

  redirect("/tasks");
};