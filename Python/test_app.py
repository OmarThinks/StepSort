"""
Testing the sorting algorithm
"""

import unittest

from app import (
    get_precision,
    get_min_max_log,
    get_storage_index,
    get_value_from_storage_index,
    get_step_array,
    get_step_array2,
)


class TestGetPrecision(unittest.TestCase):
    def test_get_precision(self):
        self.assertEqual(get_precision(0), 0)
        self.assertEqual(get_precision(-1), 0)
        self.assertEqual(get_precision(1), 0)
        self.assertEqual(get_precision(1000), 3)
        self.assertEqual(get_precision(-1000), 3)
        self.assertEqual(get_precision(1.43), -2)
        self.assertEqual(get_precision(-1.43), -2)


class TestGetMinMaxLog(unittest.TestCase):
    def test_get_min_max_log(self):
        self.assertEqual(get_min_max_log([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), (0, 9, 0))
        self.assertEqual(
            get_min_max_log([0, -1, -2, -3, -4, -5, -6, -7, -8, -9]), (-9, 0, 0)
        )
        self.assertEqual(get_min_max_log([0, 0, 0, 0, 0, 0, 0, 0]), (0, 0, 0))
        self.assertEqual(
            get_min_max_log([0, 100, 2, 3, 4, 500, 6, 7, 800, 9]), (0, 800, 0)
        )
        self.assertEqual(
            get_min_max_log([0, -100, -2, -3, -4, -500, -6, -7, -800, -9]),
            (
                -800,
                0,
                0,
            ),
        )
        self.assertEqual(
            get_min_max_log([0, 100, 200, 300, 400, 500, 600, 700, 800, 900]),
            (0, 900, 2),
        )
        self.assertEqual(
            get_min_max_log([0, -100, -200, -300, -400, -500, -600, -700, -800, -900]),
            (-900, 0, 2),
        )
        self.assertEqual(get_min_max_log([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1), (0, 9, 0))
        self.assertEqual(get_min_max_log([0, 0, 0.1, 0.2, 0.9], 0.1), (0, 0.9, 0))


class TestGetStorageIndex(unittest.TestCase):
    def test_get_storage_index(self):
        self.assertEqual(get_storage_index(0, 0, 1), 0)
        self.assertEqual(get_storage_index(5, 0, 1), 5)
        self.assertEqual(get_storage_index(5, 1, 1), 4)
        self.assertEqual(get_storage_index(-5, -10, 1), 5)
        self.assertEqual(get_storage_index(1, 0, 0.1), 10)
        self.assertEqual(get_storage_index(4.5, 0, 1), 4)


class TestGetValueFromStorageIndex(unittest.TestCase):
    def test_get_value_from_storage_index(self):
        self.assertEqual(get_value_from_storage_index(0, 0, 1), 0)
        self.assertEqual(get_value_from_storage_index(5, 0, 1), 5)
        self.assertEqual(get_value_from_storage_index(5, 1, 1), 6)
        self.assertEqual(get_value_from_storage_index(5, -10, 1), -5)
        self.assertEqual(get_value_from_storage_index(4, 5, 0.1), 5.4)
        self.assertEqual(get_value_from_storage_index(5, 0.1, 1), 5.1)


class TestGetStepArray(unittest.TestCase):
    def test_get_step_array(self):
        self.assertEqual(get_step_array([0]), [1])
        self.assertEqual(get_step_array([0, 0, 0, 0]), [4])
        self.assertEqual(get_step_array([1, 2, 3, 4, 5]), [1, 1, 1, 1, 1])
        self.assertEqual(get_step_array([1, 1, 2, 2]), [2, 2])
        self.assertEqual(get_step_array([1, 1, 0, 3, 3]), [1, 2, 0, 2])
        self.assertEqual(get_step_array([-4, -4, 2, 5]), [2, 0, 0, 0, 0, 0, 1, 0, 0, 1])

        self.assertEqual(get_step_array([1.1, 1.4]), [1, 0, 0, 1])


if __name__ == "__main__":
    unittest.main()
