"""Added img_description on Post schema.

Revision ID: 0ed3a345250a
Revises: 8b7835e61c50
Create Date: 2022-11-21 21:10:49.432784

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0ed3a345250a'
down_revision = '8b7835e61c50'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('post', schema=None) as batch_op:
        batch_op.add_column(sa.Column('img_description', sa.String(length=250), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('post', schema=None) as batch_op:
        batch_op.drop_column('img_description')

    # ### end Alembic commands ###