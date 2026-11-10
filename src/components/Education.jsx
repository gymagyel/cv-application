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
            type='number'
            min= '1950'
            max= '2100'
            placeholder = 'YYYY'
            value={formData.date}
            onChange={(event)=>
                setFormData({ ...formData, date: event.target.value})
            }
            />
        </label>
        <button type="submit">Submit</button>
      </form>
    ) : (
      <div className="cv-preview">
  <h3>{formData.school}</h3>
  <p>{formData.title}</p>
  <p>{formData.date}</p>

  <button type="button" onClick={() => setIsEditing(true)}>
    Edit
  </button>
</div>
    )}

    </section>
  );
}

export default Education;