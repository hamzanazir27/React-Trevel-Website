import { useDispatch } from "react-redux";
import { addRecentTrip } from "../redux/recentTripSlice";
import { useState } from "react";

function RecentTripsForm() {
  const dispatch = useDispatch();

  const [heading, setHeading] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [extraImages, setExtraImages] = useState([]);
  const [tags, setTags] = useState([]);

  const handleMainImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setMainImage(reader.result);
    reader.readAsDataURL(file);
  };

  const handleExtraImages = (e) => {
    const files = Array.from(e.target.files).slice(0, 6);
    const promises = files.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(file);
      });
    });

    Promise.all(promises).then((images) => setExtraImages(images));
  };

  const handleAddTrip = () => {
    if (
      !heading ||
      !price ||
      !type ||
      !duration ||
      !description ||
      !mainImage ||
      !date
    ) {
      alert("Please fill all required fields");
      return;
    }

    const newTrip = {
      heading,
      price,
      type,
      duration,
      description,
      mainImage,
      extraImages,
      tags,
      date,
    };

    dispatch(addRecentTrip(newTrip));
    // Clear form
    setHeading("");
    setPrice("");
    setType("");
    setDuration("");
    setDescription("");
    setDate("");
    setMainImage("");
    setExtraImages([]);
    setTags([]);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg border border-gray-200">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">Add Recent Trip</h1>

      <label className="block font-semibold text-gray-600 mb-1">
        Enter Title
      </label>
      <input
        value={heading}
        onChange={(e) => setHeading(e.target.value)}
        placeholder="Title"
        className="border border-gray-300 rounded-md p-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label className="block font-semibold text-gray-600 mb-1">
        Enter Price
      </label>
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        type="number"
        className="border border-gray-300 rounded-md p-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label className="block font-semibold text-gray-600 mb-1">
        Enter Type (e.g., nature)
      </label>
      <input
        value={type}
        onChange={(e) => setType(e.target.value)}
        placeholder="Type"
        className="border border-gray-300 rounded-md p-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label className="block font-semibold text-gray-600 mb-1">
        Enter Duration (e.g., 5 days)
      </label>
      <input
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        placeholder="Duration"
        className="border border-gray-300 rounded-md p-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label className="block font-semibold text-gray-600 mb-1">
        Select Date
      </label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border border-gray-300 rounded-md p-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label className="block font-semibold text-gray-600 mb-1">
        Description
      </label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="border border-gray-300 rounded-md p-2 mb-4 w-full h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label className="block font-semibold text-gray-600 mb-1">
        Main Image:
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={handleMainImage}
        className="mb-4"
      />
      {mainImage && (
        <img
          src={mainImage}
          alt="Main Preview"
          className="w-32 h-20 object-cover mb-4 rounded-md"
        />
      )}

      <label className="block font-semibold text-gray-600 mb-1">
        Extra Images (Optional, Max 6):
      </label>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleExtraImages}
        className="mb-4"
      />
      <div className="flex flex-wrap gap-2 mb-4">
        {extraImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Preview ${i}`}
            className="w-20 h-20 object-cover rounded-md"
          />
        ))}
      </div>

      <div className="mb-6">
        <label className="block font-semibold text-gray-600 mb-1">
          Select Tags:
        </label>
        <div className="flex flex-wrap gap-4 mt-1">
          {["Views", "Family", "Local Food"].map((tag) => (
            <label
              key={tag}
              className="flex items-center space-x-2 text-gray-700"
            >
              <input
                type="checkbox"
                checked={tags.includes(tag)}
                onChange={() =>
                  setTags(
                    tags.includes(tag)
                      ? tags.filter((t) => t !== tag)
                      : [...tags, tag]
                  )
                }
                className="accent-blue-500"
              />
              <span>{tag}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={handleAddTrip}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
      >
        Add Trip
      </button>
    </div>
  );
}

export default RecentTripsForm;
