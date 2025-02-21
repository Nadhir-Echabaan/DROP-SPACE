import supabase from "./supabase";

export async function getFiles() {
  const { data: files, error } = await supabase.from("files").select("*");
  if (error) console.error(error?.message);
  return files;
}
export async function deleteFile(id) {
  const { data, error } = await supabase.from("files").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("File could not be deleted");
  }
  return data;
}
export async function getFiltredFiles({ status }) {
  let { data: files, error } = await supabase
    .from("files")
    .select("*")
    .eq("status", status);
}
