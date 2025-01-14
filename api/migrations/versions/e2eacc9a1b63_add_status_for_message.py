"""add status for message

Revision ID: e2eacc9a1b63
Revises: 563cf8bf777b
Create Date: 2024-03-21 09:31:27.342221

"""
import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision = 'e2eacc9a1b63'
down_revision = '563cf8bf777b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('conversations', schema=None) as batch_op:
        batch_op.add_column(sa.Column('invoke_from', sa.String(length=255), nullable=True))

    with op.batch_alter_table('messages', schema=None) as batch_op:
        batch_op.add_column(sa.Column('status', sa.String(length=255), server_default=sa.text("'normal'::character varying"), nullable=False))
        batch_op.add_column(sa.Column('error', sa.Text(), nullable=True))
        batch_op.add_column(sa.Column('message_metadata', sa.Text(), nullable=True))
        batch_op.add_column(sa.Column('invoke_from', sa.String(length=255), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('messages', schema=None) as batch_op:
        batch_op.drop_column('invoke_from')
        batch_op.drop_column('message_metadata')
        batch_op.drop_column('error')
        batch_op.drop_column('status')

    with op.batch_alter_table('conversations', schema=None) as batch_op:
        batch_op.drop_column('invoke_from')

    # ### end Alembic commands ###
