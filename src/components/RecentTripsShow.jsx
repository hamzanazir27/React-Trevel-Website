import { useDispatch, useSelector } from "react-redux";
import { deleteRecentTrips, editRecentTrips } from "../redux/recentTripSlice";
import { useState } from "react";

function RecentTripsShow() {
  const trips = useSelector((state) => state.recentTrips.trips);
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
  const [editingId, setEditingId] = useState(null);

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

  const handleDelete = (id) => {
    dispatch(deleteRecentTrips(id));
  };

  const loadTripForEdit = (trip) => {
    const info = trip.tripsinfo;
    setHeading(info.heading);
    setPrice(info.price);
    setType(info.type);
    setDuration(info.duration);
    setDescription(info.description);
    setDate(info.date);
    setMainImage(info.mainImage);
    setExtraImages(info.extraImages || []);
    setTags(info.tags || []);
    setEditingId(trip.id);
  };

  const handleSubmitEdit = () => {
    if (
      !heading ||
      !price ||
      !type ||
      !duration ||
      !description ||
      !mainImage ||
      !date
    ) {
      alert("Fill all required fields");
      return;
    }

    const updatedInfo = {
      heading,
      price,
      type,
      duration,
      description,
      date,
      mainImage,
      extraImages,
      tags,
    };

    dispatch(editRecentTrips({ id: editingId, updatedInfo }));

    resetForm();
  };

  const resetForm = () => {
    setHeading("");
    setPrice("");
    setType("");
    setDuration("");
    setDescription("");
    setDate("");
    setMainImage("");
    setExtraImages([]);
    setTags([]);
    setEditingId(null);
  };

  const cancelEdit = () => {
    resetForm();
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">All Saved Trips</h2>

      {trips.length === 0 ? (
        <p className="text-gray-500">No trips saved yet.</p>
      ) : (
        <div className="grid gap-4">
          {trips.map((trip) => (
            <div key={trip.id} className="border rounded-lg p-4 shadow-sm">
              {editingId === trip.id ? (
                // Edit mode
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg mb-3">Edit Trip</h3>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Title
                    </label>
                    <input
                      value={heading}
                      onChange={(e) => setHeading(e.target.value)}
                      className="border p-2 block w-full rounded"
                      placeholder="Trip Title"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Price
                    </label>
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="border p-2 block w-full rounded"
                      placeholder="Price"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Type
                    </label>
                    <input
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      className="border p-2 block w-full rounded"
                      placeholder="Type"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Duration
                    </label>
                    <input
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="border p-2 block w-full rounded"
                      placeholder="Duration"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="border p-2 block w-full rounded"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Description
                    </label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="border p-2 block w-full rounded h-24"
                      placeholder="Trip Description"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Main Image
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleMainImage}
                      className="mb-2"
                    />
                    {mainImage && (
                      <img
                        src={mainImage}
                        alt="Main Preview"
                        className="w-32 h-32 object-cover rounded"
                      />
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Extra Images (Max 6)
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleExtraImages}
                      className="mb-2"
                    />
                    <div className="flex flex-wrap gap-2">
                      {extraImages.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`Extra ${idx}`}
                          className="w-24 h-24 object-cover rounded"
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Select Tags
                    </label>
                    <div className="flex gap-4">
                      {["Views", "Family", "Local Food"].map((tag) => (
                        <label key={tag} className="flex items-center">
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
                            className="mr-2"
                          />
                          {tag}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <button
                      onClick={handleSubmitEdit}
                      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                // View mode
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-lg">
                      {trip.tripsinfo.heading}
                    </h3>
                    <span className="text-green-400 font-bold">
                      Rs {trip.tripsinfo.price}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                    <div>
                      <strong>Type:</strong> {trip.tripsinfo.type}
                    </div>
                    <div>
                      <strong>Duration:</strong> {trip.tripsinfo.duration}
                    </div>
                    <div>
                      <strong>Date:</strong> {trip.tripsinfo.date}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-3">
                    {trip.tripsinfo.description}
                  </p>

                  {trip.tripsinfo.mainImage && (
                    <img
                      src={trip.tripsinfo.mainImage}
                      alt="Trip"
                      className="w-32 h-32 object-cover rounded mb-3"
                    />
                  )}

                  {trip.tripsinfo.extraImages &&
                    trip.tripsinfo.extraImages.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {trip.tripsinfo.extraImages.map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            alt={`Extra ${idx}`}
                            className="w-20 h-20 object-cover rounded"
                          />
                        ))}
                      </div>
                    )}

                  {trip.tripsinfo.tags && trip.tripsinfo.tags.length > 0 && (
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1">
                        {trip.tripsinfo.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-100 text-blue-800 px-2 py-1 rounded-sm text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2 pt-3 border-t">
                    <button
                      onClick={() => loadTripForEdit(trip)}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(trip.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecentTripsShow;
