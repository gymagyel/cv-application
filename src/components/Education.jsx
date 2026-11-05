import { useState } from 'react';

function Education() {
    const [formData, setFormData] = useState({
  school: '',
  title: '',
  date: '',
});

const [isEditing, setIsEditing] = useState(true);
function handleSubmit(event) {
  event.preventDefault();
  setIsEditing(false);
}


  return (
    <section>
      <h2>Education</h2>

          {isEditing ? (
      <form onSubmit={handleSubmit}>
        <label>
  School:
  <input
  type='date'
    value={formData.school}
    onChange={(event) =>
      setFormData({ ...formData, school: event.target.value })
    }
  />
</label>

        <label>
            Title of Study:
        <input
        value={formData.title}
        onChange={(event) =>
            setFormData({ ...formData, title: event.target.value})
        }
        />
    
        </label>

        <label>
            Date:
            <input
            value={formData.date}
            onChange={(event)=>
                setFormData({ ...formData, date: event.target.value})
            }
            />
        </label>
        <button type="submit">Submit</button>
      </form>
    ) : (
      <div>
        <p>School: {formData.school}</p>
        <p>Title of study: {formData.title}</p>
        <p>Date: {formData.date}</p>

        <button type="button" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </div>
    )}

    </section>
  );
}

export default Education;