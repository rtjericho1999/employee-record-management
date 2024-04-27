"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ViewEmployee = ({ params }) => {
  const router = useRouter();
  const [isEdittable, setIsEdittable] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    middleName: "",
    lastName: "",
    position: "",
    profilePicture: "",
  });

  const handleClick = () => {
    if (isEdittable) {
      axios
        .put("/api/employee", employee)
        .then(() => setAlertMessage("Information Update Successful"))
        .catch(() => {
          setAlertMessage("Information Update Failed");
          setTimeout(() => {
            window.location.reload();
          }, [6000]);
        });
      setShowAlert((e) => !e);
      setTimeout(() => {
        setShowAlert((e) => !e);
      }, [5000]);
    }
    setIsEdittable((e) => !e);
  };

  const handleDelete = () => {
    axios
      .patch("/api/employee", employee?.id)
      .then(() => {
        setAlertMessage("Information Delete Successful");
        setShowAlert((e) => !e);
        setTimeout(() => {
          setShowAlert((e) => !e);
          router.push("/");
        }, [5000]);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (fieldName, fieldValue) => {
    setEmployee({ ...employee, [fieldName]: fieldValue });
  };

  const handleImageUpload = (file) => {
    if (file[0]?.type.includes("image")) {
      const fr = new FileReader();
      fr.onload = () => {
        setEmployee({ ...employee, profilePicture: fr.result });
      };
      fr.readAsDataURL(file[0]);
    }
  };
  useEffect(() => {
    if (
      employee?.firstName.trim() === "" &&
      employee?.lastName.trim() === "" &&
      employee?.position.trim() === "" &&
      employee?.profilePicture.trim() === ""
    ) {
      axios
        .post("/api/specificEmployee", params.employee)
        .then((res) => {
          console.log(res.data);
          setEmployee(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [employee, params.employee]);
  return (
    <div className="relative overflow-hidden flex min-h-screen flex-col items-center justify-center gap-2">
      <div
        className={`w-[50vw] bg-[#eeeeee] text-[#111111] text-center p-2 rounded absolute top-0 transition-all duration-[0.1s] ease-[ease-in-out] 
      ${showAlert ? "right-0" : "right-[-60vw]"}
      `}
      >
        {alertMessage}
      </div>
      <div
        className={`absolute w-[75vw] h-[75vh] rounded-3xl z-20 flex flex-col gap-2 items-center justify-center bg-[#eeeeee] text-[#111111]
      transition-all duration-[0.1s] ease-[ease-in-out]
      ${showModal ? "right-[12vw]" : "right-[-75vw]"}
      `}
      >
        <p>ARE YOU SURE TO DELETE USER NUMBER {employee?.id}?</p>
        <div className="flex gap-2">
          <button
            className="border border-[#111111]  p-2 rounded-full"
            onClick={handleDelete}
          >
            YES
          </button>
          <button
            className="border border-[#111111]  p-2 rounded-full"
            onClick={() => setShowModal(false)}
          >
            NO
          </button>
        </div>
      </div>
      <h1>Create Employee</h1>
      <input
        className="bg-transparent border border-[#eeeeee] p-2"
        type="text"
        placeholder="First Name"
        value={employee?.firstName}
        name="firstName"
        onChange={(e) =>
          isEdittable && handleChange(e.target.name, e.target.value)
        }
      />
      <input
        className="bg-transparent border border-[#eeeeee] p-2"
        type="text"
        placeholder="Middle Name"
        value={employee?.middleName}
        name="middleName"
        onChange={(e) =>
          isEdittable && handleChange(e.target.name, e.target.value)
        }
      />
      <input
        className="bg-transparent border border-[#eeeeee] p-2"
        type="text"
        placeholder="Last Name"
        value={employee?.lastName}
        name="lastName"
        onChange={(e) =>
          isEdittable && handleChange(e.target.name, e.target.value)
        }
      />
      <p>Position</p>
      <select
        className="bg-transparent border border-[#eeeeee] p-2"
        type="text"
        placeholder="Position"
        value={employee?.position}
        name="position"
        onChange={(e) =>
          isEdittable && handleChange(e.target.name, e.target.value)
        }
      >
        <option value=""></option>
        <option value="Web Developer">Web Developer</option>
        <option value="Mobile Developer">Mobile Developer</option>
      </select>
      <p>Profile Picture</p>
      <div className="w-[25vh] h-[25vh] overflow-hidden relative border border-[#eeeeee]">
        <Image
          className={`
          ${employee?.profilePicture ? "opacity-1" : "opacity-0"}
          `}
          height={500}
          width={500}
          src={employee?.profilePicture}
          alt=""
        />
        {isEdittable && (
          <input
            className={`absolute top-0 left-0 w-full h-full z-10 opacity-0`}
            type="file"
            id="myfile"
            name="profilePicture"
            onChange={(e) => isEdittable && handleImageUpload(e.target.files)}
          />
        )}
      </div>
      <div className="flex gap-2">
        <button
          className="border border-[#eeeeee] p-2 rounded-full"
          onClick={handleClick}
        >
          {isEdittable ? "Save" : "Edit"}
        </button>
        <button
          className="border border-[#eeeeee] p-2 rounded-full"
          onClick={() => {
            setShowModal(true);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ViewEmployee;
