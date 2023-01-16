import { createRouter, createWebHistory } from 'vue-router/dist/vue-router.esm-bundler'
import Home from '../components/Home.vue'
import Shedule from '../components/Shedule.vue'
import Disciplines from '../components/Disciplines.vue'
import Group from '../components/Group.vue'
import Students from '../components/Students.vue'
import Teachers from '../components/Teachers.vue'
import Department from '../components/Department.vue'
import Faculty from '../components/Faculty.vue'
import StudentList from '../components/lists/StudentList.vue'
import "bootstrap/dist/js/bootstrap.js"
import TeacherList from '../components/lists/TeacherList.vue'
import GroupList from '../components/lists/GroupList.vue'
import DepartmentList from '../components/lists/DepartmentList.vue'
import FacultyList from '../components/lists/FacultyList.vue'
import DisciplineList from '../components/lists/DisciplineList.vue'
import ScheduleList from '../components/lists/ScheduleList.vue'
import StudentUpdate from '../components/updates/StudentUpdate.vue'
import TeacherUpdate from '../components/updates/TeacherUpdate.vue'
import DisciplineUpdate from '../components/updates/DisciplineUpdate.vue'
import FacultyUpdate from '../components/updates/FacultyUpdate.vue'
import DepartmentUpdate from '../components/updates/DepartmentUpdate.vue'
import GroupUpdate from '../components/updates/GroupUpdate.vue'
import ScheduleUpdate from '../components/updates/ScheduleUpdate.vue'



const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/schedules',
        component: ScheduleList
    },
    {
        path: '/disciplines',
        component: DisciplineList
    },
    {
        path: '/groups',
        component: GroupList
    },
    {
        path: '/students',
        component: StudentList
    },
    {
        path: '/teachers',
        component: TeacherList
    },
    {
        path: '/departments',
        component: DepartmentList
    },
    {
        path: '/faculties',
        component: FacultyList
    },

    {
        path: '/createStudent',
        component: Students
    },
    {
        path: '/createTeacher',
        component: Teachers
    },
    {
        path: '/createGroup',
        component: Group
    },
    {
        path: '/createDepartment',
        component: Department
    },
    {
        path: '/createDiscipline',
        component: Disciplines
    },
    {
        path: '/createFaculty',
        component: Faculty
    },
    {
        path: '/createSchedule',
        component: Shedule
    },
    {
        path: '/updateStudent/:id',
        name: 'StudentUpdate',
        component: StudentUpdate
      },
      {
        path: '/updateTeacher/:id',
        name: 'TeacherUpdate',
        component: TeacherUpdate
      },
      {
        path: '/updateDiscipline/:id',
        name: 'DisciplineUpdate',
        component: DisciplineUpdate
      },
      {
        path: '/updateFaculty/:id',
        name: 'FacultyUpdate',
        component: FacultyUpdate
      },
      {
        path: '/updateDepartment/:id',
        name: 'DepartmentUpdate',
        component: DepartmentUpdate
      },
      {
        path: '/updateGroup/:id',
        name: 'GroupUpdate',
        component: GroupUpdate
      },
      {
        path: '/updateSchedule/:id',
        name: 'ScheduleUpdate',
        component: ScheduleUpdate
      }

]

export default () => createRouter({
    history: createWebHistory(),
    routes: routes
})