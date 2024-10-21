from collections.abc import Sequence
from typing import Literal

from pydantic import BaseModel, Field

from core.workflow.nodes.base import BaseNodeData

_Condition = Literal[
    # string conditions
    "contains",
    "startswith",
    "endswith",
    "is",
    "in",
    "empty",
    "not contains",
    "not is",
    "not in",
    "not empty",
    # number conditions
    "=",
    "!=",
    "<",
    ">",
    "≥",
    "≤",
]


class FilterCondition(BaseModel):
    key: str = ""
    comparison_operator: _Condition = "contains"
    value: str | Sequence[str] = ""


class FilterBy(BaseModel):
    enabled: bool = False
    conditions: Sequence[FilterCondition] = Field(default_factory=list)


class OrderBy(BaseModel):
    enabled: bool = False
    key: str = ""
    value: Literal["asc", "desc"] = "asc"


class Limit(BaseModel):
    enabled: bool = False
    size: int = -1


class ListOperatorNodeData(BaseNodeData):
    variable: Sequence[str] = Field(default_factory=list)
    filter_by: FilterBy
    order_by: OrderBy
    limit: Limit
