import { useEffect, useState } from "react";
import { Container, ListGroup } from "react-bootstrap";

export function Logs() {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        getLogs()
        .then(({ data }) => setLogs(data))
    }, []);

    async function getLogs() {
        const response = await fetch('http://localhost:8080/logs');
        const data = await response.json();
        
        return {
            data,
        }
    }

    return (
        <Container>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <h1>Logs</h1>
            </div>
            <ListGroup as="ol" numbered>
                {logs.map(log => (
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        key={log.id}
                    >
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">{log.acao}</div>
                        <p>
                            {log.user_insert}
                        </p>
                        <p>
                            {log.data_hora}
                        </p>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    )
}