
import { useState } from 'react';

function GeneralInfo() {
 const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
});

const [isEditing, setIsEditing] = useState(true);
function handleSubmit(event) {
  event.preventDefault();
  setIsEditing(false);
}
  return (
    <section>
      <h2>General Information</h2>
    {isEditing ? (
      <form onSubmit={handleSubmit}>
        <label>
          Full name:
         <input
  value={formData.name}
  onChange={(event) =>
    setFormData({ ...formData, name: event.target.value })
  }
/>
        </label>

        <label>
          Email:
          <input
           value={formData.email}
onChange={(event) =>
  setFormData({ ...formData, email: event.target.value })
}
/>
        </label>

        <label>
          Phone:
          <input
            value={formData.phone}
onChange={(event) =>
  setFormData({ ...formData, phone: event.target.value })
}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
       ) : (
      <div className="cv-preview">
        <div className="cv-preview general-preview"></div>
  <h3>{formData.name}</h3>
  <p>{formData.email}</p>
  <p>{formData.phone}</p>

  <button type="button" onClick={() => setIsEditing(true)}>
    Edit
  </button>
</div>
    )}
    </section>
  );
}

export default GeneralInfo;
