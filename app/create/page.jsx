"use client";

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CreateEmployee = () => {
  const router = useRouter();
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    position: "",
    profilePicture: "",
  });

  const handleClick = () => {
    if (
      formData?.firstName.trim() !== "" &&
      formData?.lastName.trim() !== "" &&
      formData?.position.trim() !== "" &&
      formData?.profilePicture.trim() !== ""
    ) {
      axios
        .post("/api/employee", formData)
        .then(() => {
          setAlertMessage("Employee Registration Successful");
          setTimeout(() => {
            router.push("/");
          }, 6000);
        })
        .catch(() => setAlertMessage("Employee Registration Failed"));
      setShowAlert((e) => !e);
      setTimeout(() => {
        setShowAlert((e) => !e);
      }, 5000);
    }
  };

  const handleChange = (fieldName, fieldValue) => {
    setFormData({ ...formData, [fieldName]: fieldValue });
  };

  const handleImageUpload = (name, file) => {
    if (file[0]?.type.includes("image")) {
      const fr = new FileReader();
      fr.onload = () => {
        setFormData({ ...formData, profilePicture: fr.result });
      };
      fr.readAsDataURL(file[0]);
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center gap-2">
      <div
        className={`w-[50vw] bg-[#eeeeee] text-[#111111] text-center p-2 rounded absolute top-0 transition-all duration-[0.1s] ease-[ease-in-out] 
      ${showAlert ? "right-0" : "right-[-60vw]"}
      `}
      >
        {alertMessage}
      </div>
      <h1>Create Employee</h1>
      <input
        className="bg-transparent border border-[#eeeeee] p-2"
        type="text"
        placeholder="First Name"
        value={formData?.firstName}
        name="firstName"
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      />
      <input
        className="bg-transparent border border-[#eeeeee] p-2"
        type="text"
        placeholder="Middle Name"
        value={formData?.middleName}
        name="middleName"
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      />
      <input
        className="bg-transparent border border-[#eeeeee] p-2"
        type="text"
        placeholder="Last Name"
        value={formData?.lastName}
        name="lastName"
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      />
      <p>Position</p>
      <select
        className="bg-transparent border border-[#eeeeee] p-2"
        type="text"
        placeholder="Position"
        value={formData?.position}
        name="position"
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      >
        <option value=""></option>
        <option value="Web Developer">Web Developer</option>
        <option value="Mobile Developer">Mobile Developer</option>
      </select>
      <p>Profile Picture</p>
      <div className="relative border border-[#eeeeee]">
        <Image
          className={`
          ${formData.profilePicture ? "opacity-1" : "opacity-0"}
          `}
          height={500}
          width={500}
          src={formData?.profilePicture}
          alt="Picture of the author"
        />
        <input
          className="absolute top-0 left-0 w-full h-full z-10 opacity-0"
          type="file"
          id="myfile"
          name="profilePicture"
          onChange={(e) => handleImageUpload(e.target.name, e.target.files)}
        />
      </div>
      <button
        className="border border-[#eeeeee] p-2 rounded-full"
        onClick={handleClick}
      >
        Create Employee
      </button>
    </div>
  );
};

export default CreateEmployee;
