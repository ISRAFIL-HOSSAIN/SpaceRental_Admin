import { calender } from "../../assets/images/icons";
import { CiPhone, CiMail } from "react-icons/ci";

const userHeading = [
  {
    label: "NAME",
    key: "name",
    render: (value, item) => (
      <div className="flex space-x-2 xs:w-40">
        <img
          src={item.image}
          alt="User"
          style={{ width: 30, height: 30, borderRadius: "50%" }}
        />
        <p>{value}</p>
      </div>
    ),
  },
  {
    label: "ROLE",
    key: "role",
    className: "custom-class",
    render: (value) => (
      
      <div className="text-sm font-normal">
        <p className={`${value === "space owners" ? 'bg-[#f8f8cd]' : 'bg-[#CDF8D8]'} w-28 rounded-lg p-1 text-center`}>{value}</p>

      </div>
    ),
  },
  {
    label: "PHONE",
    key: "phone",
    className: "custom-class",
    render: (value) => (
      <div className="flex space-x-2  items-center w-32">
        <CiPhone className="" size={15} />
        <p>{value}</p>
      </div>
    ),
  },
  {
    label: "EMAIL",
    key: "email",
    className: "custom-class",
    render: (value) => (
      <div className="flex space-x-2 items-center">
        <CiMail className="" size={14} />
        <p>{value}</p>
      </div>
    ),
  },

  {
    label: "JOINED",
    key: "join",
    className: "custom-class",
    render: (value) => (
      <div className="flex space-x-2 w-28">
        <img
          src={calender}
          alt="calender"
          style={{ width: 20, height: 20, borderRadius: "50%" }}
        />
        <p>{value}</p>
      </div>
    ),
  },
];

export { userHeading };
