import { useState } from 'react';



function Experience() {
    const [formData, setFormData] = useState({
  companyName: '',
  position: '',
  responsibility: '',
  start: '',
  end: '',
});

const [isEditing, setIsEditing] = useState(true);
function handleSubmit(event) {
  event.preventDefault();
  setIsEditing(false);


}  
return (
    <section>
      <h2>Practical Experience</h2>
      {isEditing ? (
      <form onSubmit={handleSubmit}>

      <label>
        Company name:
        <input
        value={formData.companyName}
        onChange={(event) =>
            setFormData({ ...formData, companyName: event.target.value})
        }/>
        </label>

        <label>
            Position:
        <input
        value={formData.position}
        onChange={(event) =>
            setFormData({ ...formData, position: event.target.value})
        }
        />
        </label>
        <label>
            Main responsibilities:
        <textarea
        value={formData.responsibility}
        onChange={(event) =>
            setFormData({ ...formData, responsibility: event.target.value})
        }
        />
        </label>
             <label>
  Start date:
  <input
  type='date'
    value={formData.start}
    onChange={(event) =>
      setFormData({ ...formData, start: event.target.value })
    }
  />
</label>
     <label>
  End date
  <input
  type='date'
    value={formData.end}
    onChange={(event) =>
      setFormData({ ...formData, end: event.target.value })
    }
  />
</label>

<button type="submit">Submit</button>
      </form>
    ) : (
      <div>
        <p>Company: {formData.companyName}</p>
        <p>Position: {formData.position}</p>
        <p>Responsibilities: {formData.responsibility}</p>
        <p>Start date: {formData.start}</p>
        <p>End date: {formData.end}</p>

        <button type="button" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </div>
    )}
    </section>
  );
}
export default Experience;