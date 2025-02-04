import React, { useState, useEffect } from "react";
import { Bars } from "react-loader-spinner";
import useMutation from "../hooks/useMutation";
import useFetch from "../hooks/useFetch";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const File = () => {
      const [dragActive, setDragActive] = useState(false);
      const [file, setFile] = useState(null);
      const [name, setName] = useState("");
      const { mutate, data, error, loading } = useMutation();
      const { fetchUser } = useFetch("http://localhost:8000/api/file/");


      const handleSubmit = async (e) => {
            e.preventDefault();
            if (!file) {
                  toast.error("Please select a file");
                  return;
            }
            const formData = new FormData();
            formData.append("name", name);
            formData.append("file", file);
            formData.append("type", file.type || file.name.split(".").pop());
            console.log(file.size)
            const maxMimumFileSize = (file.size / (1024 * 1024))
            if (maxMimumFileSize > 5) {
                  setFile(null);
                  return toast.error("File too large")
            }
            await mutate(async () => await fetchUser({ method: "POST", body: formData }));
            setFile(null);
            setName("");
      };

      useEffect(() => {
            if (error) toast.error(error);
            if (data) toast.success("File Uploaded Successfully");
      }, [data, error]);

      return (
            <div className="mt-8">
                  <div className="mx-auto max-w-[60rem] border border-border bg-primary-foreground rounded-2xl p-4">
                        <form onSubmit={handleSubmit} className="w-full p-4 space-y-6">
                              {/* File Drop Area */}
                              <div
                                    onDragOver={() => setDragActive(true)}
                                    onDragLeave={() => setDragActive(false)}
                                    className={`border-dashed cursor-pointer items-center transition-all duration-200 justify-center relative overflow-hidden h-[12rem] border-2 flex rounded-2xl w-full ${dragActive ? "border-blue-600/90 bg-blue-100/30" : "border-card-foreground/40"
                                          }`}
                              >
                                    <div className="flex flex-col text-card-foreground items-center justify-center gap-2 cursor-pointer">
                                          <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="28"
                                                height="28"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-cloud-upload"
                                          >
                                                <path d="M12 13v8" />
                                                <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                                                <path d="m8 17 4-4 4 4" />
                                          </svg>
                                          <p className="text-xl">
                                                {
                                                      file?.name ? file.name :
                                                            <div className="flex  flex-col justify-center items-center">
                                                                  Drop file here
                                                                  <span className="text-sm text-muted-foreground">"Maximum file size should be 5MB"</span>
                                                            </div>
                                                }
                                          </p>
                                    </div>
                                    <input
                                          disabled={loading}
                                          type="file"
                                          className="w-full cursor-pointer bg-transparent opacity-0 absolute h-full"
                                          onDrop={(e) => {
                                                setDragActive(false);
                                                const droppedFile = e.dataTransfer.files[0];
                                                if (droppedFile) {
                                                      setFile(droppedFile);
                                                      setName(droppedFile.name);
                                                }
                                          }}
                                          onChange={(e) => {
                                                const selectedFile = e.target.files[0];
                                                if (selectedFile) {
                                                      setFile(selectedFile);
                                                      setName(selectedFile.name);
                                                }
                                          }}
                                    />
                              </div>

                              {/* File Name Input */}
                              <div className="space-y-2 pt-5">
                                    <label htmlFor="name" className="text-secondary-foreground block">Name</label>
                                    <input
                                          disabled={loading}
                                          id="name"
                                          value={name}
                                          name="name"
                                          onChange={(e) => setName(e.target.value)}
                                          type="text"
                                          className="border text-card-foreground focus:border-primary focus:outline-0 border-border p-2 rounded-lg w-full"
                                    />
                              </div>

                              {/* Upload Button */}
                              <button
                                    type="submit"
                                    disabled={!name || !file || loading}
                                    className="bg-primary disabled:bg-blue-500/50 px-3 p-2 rounded-lg text-white cursor-pointer"
                              >
                                    {loading ? (
                                          <span className="flex items-center gap-3">
                                                <Bars color="white" width={"18px"} height={"18px"} /> <span>Uploading</span>
                                          </span>
                                    ) : (
                                          "Upload"
                                    )}
                              </button>
                        </form>
                  </div >
            </div >
      );
};

export default File;
