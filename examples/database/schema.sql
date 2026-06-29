-- Termi Protocol - representative SQL schema (illustrative only).
-- This is NOT the production database. Full product: https://termiprotocol.com

CREATE TABLE agents (
    id          BIGSERIAL PRIMARY KEY,
    name        TEXT NOT NULL,
    cli         TEXT NOT NULL,          -- claude-code | codex | gemini-cli | ollama ...
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE tasks (
    id          BIGSERIAL PRIMARY KEY,
    agent_id    BIGINT REFERENCES agents(id) ON DELETE CASCADE,
    title       TEXT NOT NULL,
    status      TEXT NOT NULL DEFAULT 'todo',   -- todo | doing | blocked | done
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_tasks_agent_id ON tasks (agent_id);

-- Learn more about the live task board at https://termiprotocol.com
