
function Json() {
    // Değişken tanımla
    const nameVariable = 'Emre';

    // JSON verisi
    const jsonData = [
        { id: 1, name: nameVariable, age: 30 },
        { id: 2, name: 'Jane', age: 25 },
        { id: 3, name: 'Doe', age: 40 }
    ];      
  
    return (
        <div>
            <h1>JSON Verisi</h1>
            <ul>
                {jsonData.map(item => (
                    <li key={item.id}>
                        <strong>ID:</strong> {item.id}, <strong>Ad:</strong> {item.name}, <strong>Yaş:</strong> {item.age}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Json;
