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
        rows={4}
        value={formData.responsibility}
        onChange={(event) =>
            setFormData({ ...formData, responsibility: event.target.value})
        }
        />
        </label>
             <label>
  Start date:
  <input
  type='number'
            min= '1950'
            max= '2100'
            placeholder = 'YYYY'
    value={formData.start}
    onChange={(event) =>
      setFormData({ ...formData, start: event.target.value })
    }
  />
</label>
     <label>
  End date
  <input
  type='number'
            min= '1950'
            max= '2100'
            placeholder = 'YYYY'
    value={formData.end}
    onChange={(event) =>
      setFormData({ ...formData, end: event.target.value })
    }
  />
</label>

<button type="submit">Submit</button>
      </form>
    ) : (
        
      <div className="cv-preview">
        <h3>{formData.companyName}</h3>
        <p>Position: {formData.position}</p>
<p className="responsibilities-heading">
  Key Responsibilities
</p>
        
        <div className="cv-preview">
        <ul>
  {formData.responsibility
    .split('\n')
    .filter((item) => item.trim() !== '')
    .map((item, index) => (
      <li key={index}>{item}</li>
    ))}
</ul></div>
        <p>
  {formData.start} – {formData.end || 'Present'}
</p>

        <button type="button" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </div>
    )}
    </section>
  );
}
export default Experience;